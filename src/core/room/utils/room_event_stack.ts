import { EventPicker, GameEventIdentifiers, WorkPlace } from 'core/event/event';

export class RoomEventStacker<T extends WorkPlace> {
  private eventStack: EventPicker<GameEventIdentifiers, T>[] = [];
  push(content: EventPicker<GameEventIdentifiers, T>) {
    this.eventStack.push(content);
  }

  async toString(): Promise<string> {
    return Buffer.from(JSON.stringify(this.eventStack)).toString('base64');
  }

  static async toString(eventStack: EventPicker<GameEventIdentifiers, WorkPlace>[]): Promise<string> {
    return Buffer.from(JSON.stringify(eventStack)).toString('base64');
  }

  static async toStack(eventsString: string) {
    const str = Buffer.from(eventsString, 'base64').toString('utf8')
    return JSON.parse(str);
  }
}
