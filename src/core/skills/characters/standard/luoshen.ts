import { CardId } from 'core/cards/libs/card_props';
import { CardObtainedReason, EventPacker, GameEventIdentifiers, ServerEventFinder } from 'core/event/event';
import { Sanguosha } from 'core/game/engine';
import { GameCommonRules } from 'core/game/game_rules';
import {
  AllStage,
  JudgeEffectStage,
  PhaseStageChangeStage,
  PlayerPhase,
  PlayerPhaseStages,
} from 'core/game/stage_processor';
import { Player } from 'core/player/player';
import { PlayerCardsArea } from 'core/player/player_props';
import { Room } from 'core/room/room';
import { CommonSkill, CompulsorySkill, ShadowSkill, TriggerSkill } from 'core/skills/skill';

@CommonSkill({ name: 'luoshen', description: 'luoshen_description' })
export class LuoShen extends TriggerSkill {
  isAutoTrigger(
    event: ServerEventFinder<GameEventIdentifiers.PhaseStageChangeEvent | GameEventIdentifiers.JudgeEvent>,
  ) {
    const identifier = EventPacker.getIdentifier(event);
    return identifier === GameEventIdentifiers.JudgeEvent;
  }

  isTriggerable(
    event: ServerEventFinder<GameEventIdentifiers.PhaseStageChangeEvent | GameEventIdentifiers.JudgeEvent>,
    stage?: AllStage,
  ) {
    return stage === PhaseStageChangeStage.StageChanged || stage === JudgeEffectStage.AfterJudgeEffect;
  }

  canUse(
    room: Room,
    owner: Player,
    content: ServerEventFinder<GameEventIdentifiers.PhaseStageChangeEvent | GameEventIdentifiers.JudgeEvent>,
  ) {
    const identifier = EventPacker.getIdentifier(content);
    if (identifier === GameEventIdentifiers.PhaseStageChangeEvent) {
      content = content as ServerEventFinder<GameEventIdentifiers.PhaseStageChangeEvent>;
      return owner.Id === content.playerId && PlayerPhaseStages.PrepareStage === content.toStage;
    } else if (identifier === GameEventIdentifiers.JudgeEvent) {
      content = content as ServerEventFinder<GameEventIdentifiers.JudgeEvent>;
      return owner.Id === content.toId && content.bySkill === this.GeneralName;
    }

    return false;
  }

  async onTrigger(room: Room, event: ServerEventFinder<GameEventIdentifiers.SkillUseEvent>) {
    const { triggeredOnEvent } = event;
    const identifier = triggeredOnEvent && EventPacker.getIdentifier(triggeredOnEvent);
    if (identifier === GameEventIdentifiers.JudgeEvent) {
      event.translationsMessage = undefined;
    }
    return true;
  }

  async onEffect(room: Room, skillUseEvent: ServerEventFinder<GameEventIdentifiers.SkillEffectEvent>) {
    const { triggeredOnEvent } = skillUseEvent;

    const identifier = triggeredOnEvent && EventPacker.getIdentifier(triggeredOnEvent);
    if (identifier === GameEventIdentifiers.PhaseStageChangeEvent) {
      do {
        const judge = await room.judge(skillUseEvent.fromId, undefined, this.Name);
        if (Sanguosha.getCardById(judge.judgeCardId).isBlack()) {
          room.notify(
            GameEventIdentifiers.AskForSkillUseEvent,
            {
              invokeSkillNames: [this.Name],
              toId: skillUseEvent.fromId,
            },
            skillUseEvent.fromId,
          );
          const { invoke } = await room.onReceivingAsyncReponseFrom(
            GameEventIdentifiers.AskForSkillUseEvent,
            skillUseEvent.fromId,
          );
          if (!invoke) {
            break;
          }
        } else {
          break;
        }
      } while (true);
    } else if (identifier === GameEventIdentifiers.JudgeEvent) {
      const judgeEvent = triggeredOnEvent as ServerEventFinder<GameEventIdentifiers.JudgeEvent>;
      const player = room.getPlayerById(skillUseEvent.fromId);
      const luoshenCards = player.getFlag<CardId[]>(this.Name) || [];
      luoshenCards.push(judgeEvent.judgeCardId);
      player.setFlag<CardId[]>(this.Name, luoshenCards);

      if (Sanguosha.getCardById(judgeEvent.judgeCardId).isBlack()) {
        await room.obtainCards(
          {
            toId: skillUseEvent.fromId,
            cardIds: [judgeEvent.judgeCardId],
            reason: CardObtainedReason.ActivePrey,
          },
          true,
        );
      }
    }

    return true;
  }
}

@ShadowSkill
@CompulsorySkill({ name: 'luoshen', description: 'luoshen_description' })
export class LuoShenShadow extends TriggerSkill {
  public isTriggerable(event: ServerEventFinder<GameEventIdentifiers.AskForCardDropEvent>): boolean {
    return EventPacker.getIdentifier(event) === GameEventIdentifiers.AskForCardDropEvent;
  }

  public canUse(room: Room, owner: Player) {
    return room.CurrentPlayerPhase === PlayerPhase.DropCardStage && room.CurrentPhasePlayer.Id === owner.Id;
  }

  public async onTrigger(): Promise<boolean> {
    return true;
  }

  public async onEffect(room: Room, event: ServerEventFinder<GameEventIdentifiers.SkillUseEvent>): Promise<boolean> {
    const { triggeredOnEvent } = event;
    const askForCardDropEvent = triggeredOnEvent as ServerEventFinder<GameEventIdentifiers.AskForCardDropEvent>;
    const player = room.getPlayerById(askForCardDropEvent.toId);
    const luoshenCards = player.getFlag<CardId[]>(this.GeneralName);
    player.removeFlag(this.GeneralName);

    const maxHold =
      GameCommonRules.getBaseHoldCardNumber(room, player) + GameCommonRules.getAdditionalHoldCardNumber(room, player);

    const otherHandCards = player.getCardIds(PlayerCardsArea.HandArea).filter((card) => !luoshenCards.includes(card));
    const discardAmount = otherHandCards.length - maxHold;

    if (discardAmount <= 0) {
      EventPacker.terminate(askForCardDropEvent);
    } else {
      askForCardDropEvent.cardAmount = discardAmount;
      askForCardDropEvent.except = askForCardDropEvent.except
        ? [...askForCardDropEvent.except, ...luoshenCards]
        : luoshenCards;
    }

    return true;
  }
}
