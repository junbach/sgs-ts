import { CardId } from 'core/cards/libs/card_props';
import { GameEventIdentifiers, ServerEventFinder } from 'core/event/event';
import { AllStage, CardLostStage } from 'core/game/stage_processor';
import { Player } from 'core/player/player';
import { PlayerCardsArea, PlayerId } from 'core/player/player_props';
import { Room } from 'core/room/room';
import { CommonSkill, TriggerSkill } from 'core/skills/skill';

@CommonSkill({ name: 'lianying', description: 'lianying_description' })
export class LianYing extends TriggerSkill {
  isTriggerable(event: ServerEventFinder<GameEventIdentifiers.CardLostEvent>, stage?: AllStage) {
    return stage === CardLostStage.AfterCardLostEffect;
  }

  canUse(room: Room, owner: Player, content: ServerEventFinder<GameEventIdentifiers.CardLostEvent>) {
    const lostCards = content.cards
      .filter(({ fromArea }) => fromArea === PlayerCardsArea.HandArea)
      .map(({ cardId }) => cardId);
    const handCards = owner.getCardIds(PlayerCardsArea.HandArea);
    room.setFlag(owner.Id, this.Name, Math.max(1, handCards.length));

    return (
      owner.Id === content.fromId && handCards.filter(card => lostCards.includes(card)).length === handCards.length
    );
  }

  targetFilter(room: Room, targets: PlayerId[]) {
    return targets.length > 0;
  }

  isAvailableTarget(
    owner: PlayerId,
    room: Room,
    target: PlayerId,
    selectedCards: CardId[],
    selectedTargets: PlayerId[],
    containerCard?: CardId,
  ) {
    const numberOfTargets = room.getFlag<number>(owner, this.Name);
    return selectedTargets.length <= numberOfTargets;
  }

  async onTrigger() {
    return true;
  }

  async onEffect(room: Room, skillUseEvent: ServerEventFinder<GameEventIdentifiers.SkillEffectEvent>) {
    const { fromId, toIds } = skillUseEvent;
    for (const toId of toIds!) {
      await room.drawCards(1, toId, 'top', fromId, this.Name);
    }
    return true;
  }
}
