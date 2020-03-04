import { Card } from 'core/cards/card';
import {
  GameEventIdentifiers,
  ServerEventFinder as _ServerEventFinder,
} from 'core/event/event';
import {
  GameInfo as _GameInfo,
  GameRunningInfo as _GameRunningInfo,
} from 'core/game/game_props';
import { ClientSocket } from 'core/network/socket.client';
import { Player } from 'core/player/player';
import { ClientPlayer } from 'core/player/player.client';
import {
  PlayerId as _PlayerId,
  PlayerInfo as _PlayerInfo,
} from 'core/player/player_props';
import { RoomId as _RoomId } from 'core/room/room';
import { ClientRoom } from 'core/room/room.client';
import { RoomInfo as _RoomInfo } from 'core/shares/types/server_types';
import { Skill } from 'core/skills/skill';
import * as mobx from 'mobx';

import * as React from 'react';
import styles from './room.module.css';

export type PlayerId = _PlayerId;
export type PlayerInfo = _PlayerInfo;
export type RoomInfo = _RoomInfo;
export type RoomId = _RoomId;
export type GameInfo = _GameInfo;
export type GameRunningInfo = _GameRunningInfo;
export type ServerEventFinder<
  I extends GameEventIdentifiers
> = _ServerEventFinder<I>;

type ClientRoomInfo = {
  roomId: number;
  playerName: string;
  socket: ClientSocket;
  timestamp: number;
};

export class RoomStore {
  @mobx.observable.ref
  clientRoomInfo: ClientRoomInfo;
  @mobx.observable.ref
  room: ClientRoom;

  @mobx.observable.ref
  clientPlayerId: PlayerId;

  @mobx.observable.ref
  gameDialog: JSX.Element | undefined;

  @mobx.observable.shallow
  gameLog: string[] = [];

  @mobx.observable.ref
  updateClientPlayerFlag: boolean = false;
  @mobx.observable.ref
  updateDahboardUIFlag: boolean = false;

  @mobx.observable.ref
  actionButtonStatus: {
    confirm: boolean;
    cancel: boolean;
    finish: boolean;
  } = {
    confirm: false,
    cancel: false,
    finish: false,
  };

  @mobx.observable.ref
  clientPlayerCardActionsMatcher: (card: Card) => boolean;
  @mobx.observable.ref
  onClickHandCardToPlay: (card: Card, selected: boolean) => void;
  @mobx.observable.ref
  playersSelectionMatcher: (player: Player) => boolean;
  @mobx.observable.ref
  onClickPlayer: (player: Player, selected: boolean) => void;
  @mobx.observable.ref
  onClickSkill: (skill: Skill, selected: boolean) => void;

  @mobx.observable.ref
  confirmButtonAction: (() => void) | undefined;
  @mobx.observable.ref
  cancelButtonAction: (() => void) | undefined;
  @mobx.observable.ref
  finishButtonAction: (() => void) | undefined;
}

export class RoomPresenter {
  private store: RoomStore;
  public createStore() {
    this.store = new RoomStore();
    return this.store;
  }

  private tryToThrowUninitializedError() {
    if (!this.store) {
      throw new Error('Uninitialized room store');
    }
  }

  @mobx.computed
  get ClientPlayer(): Player | undefined {
    return this.store.room?.getPlayerById(this.store.clientPlayerId);
  }

  @mobx.action
  updateClientPlayerUI() {
    this.store.updateClientPlayerFlag = !this.store.updateClientPlayerFlag;
  }

  @mobx.action
  updateDashboardUI() {
    this.store.updateDahboardUIFlag = !this.store.updateDahboardUIFlag;
  }

  @mobx.action
  setupRoomStatus(info: ClientRoomInfo) {
    this.store.clientRoomInfo = info;
  }

  @mobx.action
  setupClientPlayerId(playerId: PlayerId) {
    this.store.clientPlayerId = playerId;
  }

  @mobx.action
  enableActionButton(...buttons: ('confirm' | 'cancel' | 'finish')[]) {
    buttons.forEach(btn => (this.store.actionButtonStatus[btn] = true));
  }
  @mobx.action
  disableActionButton(...buttons: ('confirm' | 'cancel' | 'finish')[]) {
    buttons.forEach(btn => (this.store.actionButtonStatus[btn] = false));
  }

  @mobx.action
  playerEnter(playerInfo: PlayerInfo) {
    this.tryToThrowUninitializedError();
    const player = new ClientPlayer(
      playerInfo.Id,
      playerInfo.Name,
      playerInfo.Position,
      playerInfo.CharacterId,
    );
    this.store.room.addPlayer(player);
    this.updateClientPlayerUI();
  }

  @mobx.action
  playerLeave(playerId: PlayerId) {
    this.tryToThrowUninitializedError();
    if (this.store.room.isPlaying()) {
      this.store.room.getPlayerById(playerId).offline();
    } else {
      this.store.room.removePlayer(playerId);
    }
  }

  @mobx.action
  createClientRoom(
    roomId: RoomId,
    socket: ClientSocket,
    gameInfo: GameInfo,
    playersInfo: PlayerInfo[],
  ) {
    this.tryToThrowUninitializedError();
    const players = playersInfo.map(
      playerInfo =>
        new ClientPlayer(
          playerInfo.Id,
          playerInfo.Name,
          playerInfo.Position,
          playerInfo.CharacterId,
        ),
    );

    this.store.room = new ClientRoom(roomId, socket, gameInfo, players);
    this.updateClientPlayerUI();
  }

  @mobx.action
  addGameLog(log: string) {
    this.store.gameLog.push(log);
  }

  @mobx.action
  createDialog(title: string | JSX.Element, content: JSX.Element) {
    this.store.gameDialog = (
      <div className={styles.gameDialog}>
        {typeof title === 'string' ? (
          <h4 dangerouslySetInnerHTML={{ __html: title }} />
        ) : (
          <h4>{title}</h4>
        )}
        {content}
      </div>
    );
  }

  @mobx.action
  closeDialog() {
    this.store.gameDialog = undefined;
  }

  @mobx.action
  setupClientPlayerCardActionsMatcher(matcher: (card: Card) => boolean) {
    this.store.clientPlayerCardActionsMatcher = matcher;
  }
  @mobx.action
  onClickPlayerCard(handler: (card: Card, selected: boolean) => void) {
    this.store.onClickHandCardToPlay = handler;
  }

  @mobx.action
  setupPlayersSelectionMatcher(matcher: (player: Player) => boolean) {
    this.store.playersSelectionMatcher = matcher;
  }
  @mobx.action
  onClickPlayer(handler: (player: Player, selected: boolean) => void) {
    this.store.onClickPlayer = handler;
  }
  @mobx.action
  onClickSkill(handler: (skill: Skill, selected: boolean) => void) {
    this.store.onClickSkill = handler;
  }

  @mobx.action
  defineConfirmButtonActions(handler: () => void) {
    this.store.confirmButtonAction = mobx.action(() => {
      handler();
      this.store.actionButtonStatus.confirm = false;
      this.store.confirmButtonAction = undefined;
    });
  }
  @mobx.action
  defineFinishButtonActions(handler: () => void) {
    this.store.finishButtonAction = mobx.action(() => {
      handler();
      this.store.actionButtonStatus.finish = false;
      this.store.finishButtonAction = undefined;
    });
  }
  @mobx.action
  defineCancelButtonActions(handler: () => void) {
    this.store.cancelButtonAction = mobx.action(() => {
      handler();
      this.store.actionButtonStatus.cancel = false;
      this.store.cancelButtonAction = undefined;
    });
  }
}
