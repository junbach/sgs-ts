import { SkillLoader } from 'core/game/package_loader/loader.skills';
import { Skill } from 'core/skills/skill';
import { Card, CardId, CardSuit, CardType } from './card';

export abstract class BasicCard extends Card {
  protected cardType = CardType.Basic;

  constructor(
    protected id,
    protected cardNumber: number,
    protected suit: CardSuit,
    protected name: string,
    protected generalName: string,
    protected description: string,
    protected skill: Skill,
  ) {
    super();
  }
}
