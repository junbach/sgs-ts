import { VirtualCard } from 'core/cards/card';
import { CardMatcher } from 'core/cards/libs/card_matcher';
import { CardId } from 'core/cards/libs/card_props';
import { Slash } from 'core/cards/standard/slash';
import { Player } from 'core/player/player';
import { Room } from 'core/room/room';
import { CommonSkill, ViewAsSkill } from 'core/skills/skill';

@CommonSkill({ name: 'zhangbashemao', description: 'zhangbashemao_description' })
export class ZhangBaSheMaoSkill extends ViewAsSkill {
  public canViewAs(): string[] {
    return ['slash'];
  }
  public canUse(room: Room, owner: Player) {
    return owner.canUseCard(room, new CardMatcher({ name: ['slash'] }));
  }

  public cardFilter(room: Room, owner: Player, cards: CardId[]): boolean {
    return cards.length === 2;
  }
  public isAvailableCard(
    room: Room,
    owner: Player,
    pendingCardId: CardId,
    selectedCards: CardId[],
    containerCard?: CardId | undefined,
  ): boolean {
    return pendingCardId !== containerCard;
  }

  public viewAs(selectedCards: CardId[]) {
    return VirtualCard.create<Slash>(
      {
        cardName: 'slash',
        bySkill: this.Name,
      },
      selectedCards,
    );
  }
}
