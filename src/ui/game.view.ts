import { ClientCard } from 'core/cards/card.client';
import { FinalPlayersData } from 'core/game/game_props';
import { ClientPlayer } from 'core/player/player.client';

export type GameViewProps = {
  currentPlayer: ClientPlayer;
  lordPlayer: ClientPlayer;
  otherPlayers: ClientPlayer[];
  cardDile: ClientCard[];
};

export abstract class GameView {
  constructor(props: GameViewProps) {
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }

    this.initGameView();
  }

  protected abstract initGameView(): void;
  public abstract playAnimation(): void;
  public abstract showMessage(message: string): void;
  public abstract playerDied(player: ClientPlayer): void;
  public abstract showFinalStatisticBoard(finalData: FinalPlayersData): void;
  public abstract reset(): void;
}
