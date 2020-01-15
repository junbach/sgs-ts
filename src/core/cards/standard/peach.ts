import { SkillLoader } from 'core/game/package_loader/loader.skills';
import { PeachSkill } from 'core/skills/characters/standard/peach';
import { BasicCard } from '../basic_card';
import { CardId, CardSuit } from '../card';

export class Peach extends BasicCard {
  constructor(id: CardId, cardNumber: number, suit: CardSuit) {
    super(
      id,
      cardNumber,
      suit,
      'peach',
      'peach',
      'peach_description',
      SkillLoader.getInstance().getSkillByName('peach'),
    );
  }

  public get Skill() {
    return this.skill as PeachSkill;
  }
}
