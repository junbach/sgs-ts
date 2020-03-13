import { GameRunningInfo } from 'core/game/game_props';
import { PlayerId } from 'core/player/player_props';
import { PatchedTranslationObject } from 'core/translations/translation_json_tool';
import { ClientEvent } from './event.client';
import { ServerEvent } from './event.server';

export const enum RoomEvent {
  SetFlagEvent = 'setFlag',
  RemoveFlagEvent = 'removeFlag',
  ClearFlagEvent = 'clearFlag',
  AddMarkEvent = 'addMark',
  SetMarkEvent = 'setMark',
  RemoveMarkEvent = 'removeMark',
  ClearMarkEvent = 'clearMark',
}

type RoomEventUtilities = {
  [RoomEvent.SetFlagEvent]: {
    name: string;
    value: any;
    to: PlayerId;
  };
  [RoomEvent.RemoveFlagEvent]: {
    name: string;
    to: PlayerId;
  };
  [RoomEvent.ClearFlagEvent]: {
    to: PlayerId;
  };
  [RoomEvent.AddMarkEvent]: {
    name: string;
    value: number;
    to: PlayerId;
  };
  [RoomEvent.SetMarkEvent]: {
    name: string;
    value: number;
    to: PlayerId;
  };
  [RoomEvent.RemoveMarkEvent]: {
    name: string;
    to: PlayerId;
  };
  [RoomEvent.ClearMarkEvent]: {
    to: PlayerId;
  };
};

export type RoomEventFinder<T extends RoomEvent> = RoomEventUtilities[T];

export const enum GameEventIdentifiers {
  UserMessageEvent = 100,
  PhaseChangeEvent,
  SyncGameCommonRulesEvent,

  LoseSkillEvent,
  ObtainSkillEvent,

  EquipEvent,
  CardLoseEvent,
  CardDropEvent,
  CardResponseEvent,
  CardUseEvent,
  CardEffectEvent,
  CardDisplayEvent,
  DrawCardEvent,
  ObtainCardEvent,
  MoveCardEvent,

  AimEvent,

  SkillUseEvent,
  SkillEffectEvent,
  PinDianEvent,
  LoseHpEvent,
  DamageEvent,
  RecoverEvent,
  JudgeEvent,

  GameReadyEvent,
  GameStartEvent,
  GameOverEvent,
  PlayerEnterRefusedEvent,
  PlayerEnterEvent,
  PlayerLeaveEvent,
  PlayerDyingEvent,
  PlayerDiedEvent,

  AskForPlayCardsOrSkillsEvent,
  AskForPeachEvent,
  AskForCardResponseEvent,
  AskForCardUseEvent,
  AskForCardDisplayEvent,
  AskForCardDropEvent,
  AskForPinDianCardEvent,
  AskForChoosingCardEvent,
  AskForChoosePlayerEvent,
  AskForChooseOptionsEvent,
  AskForChoosingCardFromPlayerEvent,
  AskForInvokeEvent,
  AskForChooseCharacterEvent,
  AskForPlaceCardsInDileEvent,
}

export type CardResponsiveEventIdentifiers =
  | GameEventIdentifiers.AskForPeachEvent
  | GameEventIdentifiers.AskForCardResponseEvent
  | GameEventIdentifiers.AskForCardUseEvent;

export const isCardResponsiveIdentifier = (
  identifier: GameEventIdentifiers,
): identifier is CardResponsiveEventIdentifiers => {
  return [
    GameEventIdentifiers.AskForPeachEvent,
    GameEventIdentifiers.AskForCardResponseEvent,
    GameEventIdentifiers.AskForCardUseEvent,
  ].includes(identifier);
};

export const clientActiveListenerEvents = () => [
  GameEventIdentifiers.UserMessageEvent,
  GameEventIdentifiers.PhaseChangeEvent,
  GameEventIdentifiers.SyncGameCommonRulesEvent,

  GameEventIdentifiers.EquipEvent,
  GameEventIdentifiers.CardDropEvent,
  GameEventIdentifiers.CardResponseEvent,
  GameEventIdentifiers.CardUseEvent,
  GameEventIdentifiers.CardEffectEvent,
  GameEventIdentifiers.CardLoseEvent,
  GameEventIdentifiers.CardDisplayEvent,
  GameEventIdentifiers.DrawCardEvent,
  GameEventIdentifiers.ObtainCardEvent,
  GameEventIdentifiers.MoveCardEvent,

  GameEventIdentifiers.AimEvent,

  GameEventIdentifiers.SkillUseEvent,
  GameEventIdentifiers.SkillEffectEvent,
  GameEventIdentifiers.PinDianEvent,
  GameEventIdentifiers.LoseHpEvent,
  GameEventIdentifiers.DamageEvent,
  GameEventIdentifiers.RecoverEvent,
  GameEventIdentifiers.JudgeEvent,

  GameEventIdentifiers.SkillUseEvent,
  GameEventIdentifiers.SkillEffectEvent,

  GameEventIdentifiers.GameStartEvent,
  GameEventIdentifiers.GameReadyEvent,
  GameEventIdentifiers.GameOverEvent,
  GameEventIdentifiers.PlayerDyingEvent,
  GameEventIdentifiers.PlayerDiedEvent,
  GameEventIdentifiers.PlayerEnterEvent,
  GameEventIdentifiers.PlayerLeaveEvent,

  GameEventIdentifiers.AskForPlayCardsOrSkillsEvent,
  GameEventIdentifiers.AskForPeachEvent,
  GameEventIdentifiers.AskForCardResponseEvent,
  GameEventIdentifiers.AskForCardUseEvent,
  GameEventIdentifiers.AskForCardDisplayEvent,
  GameEventIdentifiers.AskForCardDropEvent,
  GameEventIdentifiers.AskForPinDianCardEvent,
  GameEventIdentifiers.AskForChoosingCardEvent,
  GameEventIdentifiers.AskForChoosePlayerEvent,
  GameEventIdentifiers.AskForChooseOptionsEvent,
  GameEventIdentifiers.AskForChoosingCardFromPlayerEvent,
  GameEventIdentifiers.AskForInvokeEvent,
  GameEventIdentifiers.AskForChooseCharacterEvent,
  GameEventIdentifiers.AskForPlaceCardsInDileEvent,
];

export const serverActiveListenerEvents = (): [
  GameEventIdentifiers.UserMessageEvent,
  GameEventIdentifiers.PlayerEnterEvent,
  GameEventIdentifiers.PlayerLeaveEvent,
] => [
  GameEventIdentifiers.UserMessageEvent,
  GameEventIdentifiers.PlayerEnterEvent,
  GameEventIdentifiers.PlayerLeaveEvent,
];

export const serverResponsiveListenerEvents = () => [
  GameEventIdentifiers.SyncGameCommonRulesEvent,

  GameEventIdentifiers.CardDropEvent,
  GameEventIdentifiers.CardResponseEvent,
  GameEventIdentifiers.CardUseEvent,
  GameEventIdentifiers.CardEffectEvent,
  GameEventIdentifiers.CardDisplayEvent,
  GameEventIdentifiers.DrawCardEvent,
  GameEventIdentifiers.ObtainCardEvent,
  GameEventIdentifiers.MoveCardEvent,

  GameEventIdentifiers.AimEvent,

  GameEventIdentifiers.SkillUseEvent,
  GameEventIdentifiers.SkillEffectEvent,

  GameEventIdentifiers.GameStartEvent,
  GameEventIdentifiers.GameOverEvent,
  GameEventIdentifiers.PlayerDyingEvent,
  GameEventIdentifiers.PlayerDiedEvent,

  GameEventIdentifiers.AskForPlayCardsOrSkillsEvent,
  GameEventIdentifiers.AskForPeachEvent,
  GameEventIdentifiers.AskForCardResponseEvent,
  GameEventIdentifiers.AskForCardUseEvent,
  GameEventIdentifiers.AskForCardDisplayEvent,
  GameEventIdentifiers.AskForCardDropEvent,
  GameEventIdentifiers.AskForPinDianCardEvent,
  GameEventIdentifiers.AskForChoosingCardEvent,
  GameEventIdentifiers.AskForChoosePlayerEvent,
  GameEventIdentifiers.AskForChooseOptionsEvent,
  GameEventIdentifiers.AskForChoosingCardFromPlayerEvent,
  GameEventIdentifiers.AskForInvokeEvent,
  GameEventIdentifiers.AskForChooseCharacterEvent,
  GameEventIdentifiers.AskForPlaceCardsInDileEvent,
];

export const enum CardLostReason {
  CardUse,
  CardResponse,
  ActiveDrop,
  PassiveDrop,
  ActiveMove,
  PassiveMove,
}

export const enum CardObtainedReason {
  CardDraw,
  ActivePrey,
  PassiveObtained,
}

export const enum WorkPlace {
  Client,
  Server,
}

export type BaseGameEvent = {
  triggeredBySkillName?: string;
  messages?: string[];
  translationsMessage?: PatchedTranslationObject;
};

export type EventUtilities = {
  [K in keyof typeof GameEventIdentifiers]: object;
};

export type EventPicker<
  I extends GameEventIdentifiers,
  E extends WorkPlace
> = BaseGameEvent &
  (E extends WorkPlace.Client ? ClientEvent[I] : ServerEvent[I]);

export type ClientEventFinder<I extends GameEventIdentifiers> = BaseGameEvent &
  ClientEvent[I];
export type ServerEventFinder<I extends GameEventIdentifiers> = BaseGameEvent &
  ServerEvent[I];

export class EventPacker {
  private constructor() {}

  static wrapGameRunningInfo<T extends GameEventIdentifiers>(
    event: ServerEventFinder<T>,
    info: GameRunningInfo,
  ): ServerEventFinder<T> {
    return { ...event, ...info };
  }

  static getGameRunningInfo<T extends GameEventIdentifiers>(
    event: ServerEventFinder<T>,
  ): GameRunningInfo {
    const { numberOfDrawStack, round, currentPlayerId } = event as any;

    return {
      numberOfDrawStack,
      round,
      currentPlayerId,
    };
  }

  static isDisresponsiveEvent = <T extends GameEventIdentifiers>(
    event: ServerEventFinder<T>,
  ) => {
    return EventPacker.hasFlag('disresponsive', event);
  };

  static setDisresponsiveEvent = <T extends GameEventIdentifiers>(
    event: ServerEventFinder<T>,
  ): ServerEventFinder<T> => {
    (event as any).disresponsive = true;
    return event;
  };

  static addFlag = <T extends GameEventIdentifiers>(
    property: string,
    event: ServerEventFinder<T>,
  ): ServerEventFinder<T> => {
    (event as any)[property] = true;
    return event;
  };

  static hasFlag = <T extends GameEventIdentifiers>(
    property: string,
    event: ServerEventFinder<T>,
  ): boolean => {
    return property in event;
  };

  static removeFlag = <T extends GameEventIdentifiers>(
    property: string,
    event: ServerEventFinder<T>,
  ): ServerEventFinder<T> => {
    delete event[property];
    return event;
  };

  static createUncancellableEvent = <T extends GameEventIdentifiers>(
    event: ServerEventFinder<T>,
  ): ServerEventFinder<T> => {
    (event as any).uncancellable = true;
    return event;
  };

  static createIdentifierEvent = <
    T extends GameEventIdentifiers,
    E extends ServerEventFinder<T> | ClientEventFinder<T>
  >(
    identifier: T,
    event: E,
  ): E => {
    (event as any).identifier = identifier;
    return event;
  };

  static hasIdentifier = <T extends GameEventIdentifiers>(
    identifier: T,
    event: ServerEventFinder<T>,
  ): boolean => {
    return (event as any).identifier === identifier;
  };

  static getIdentifier = <T extends GameEventIdentifiers>(
    event: ServerEventFinder<T>,
  ): T | undefined => {
    return (event as any).identifier;
  };

  static isUncancellabelEvent = <T extends GameEventIdentifiers>(
    event: ServerEventFinder<T>,
  ) => {
    return !!(event as any).uncancellable;
  };

  static terminate<T extends EventPicker<GameEventIdentifiers, WorkPlace>>(
    event: T,
  ): T {
    (event as any).terminate = true;
    return event;
  }

  static recall<T extends EventPicker<GameEventIdentifiers, WorkPlace>>(
    event: T,
  ): T {
    (event as any).terminate = false;
    return event;
  }

  static isTerminated(event: EventPicker<GameEventIdentifiers, WorkPlace>) {
    return !!(event as any).terminate;
  }
}
