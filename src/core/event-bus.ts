import { KindOfListener } from './types'
import { v4 } from 'uuid'

export abstract class AbstractEventBus {
  private listeners = new Map<string, Map<string, KindOfListener<unknown>>>()

  public addEventListener<EventKey extends string, Event extends unknown>(
    eventName: EventKey,
    listener: KindOfListener<Event>
  ) {
    const id = v4()
    const eventListeners = this.listeners.get(eventName) ?? new Map([])
    eventListeners.set(id, listener)
    this.listeners.set(eventName, eventListeners)
    return id
  }

  public removeEventListener<EventKey extends string>(
    eventName: EventKey,
    id: string
  ) {
    const eventListeners = this.listeners.get(eventName) ?? new Map([])
    if (eventListeners.has(id)) {
      eventListeners.delete(id)
      this.listeners.set(eventName, eventListeners)
      return true
    } else {
      return false
    }
  }

  public publish<EventKey extends string, Event extends unknown>(
    eventName: EventKey,
    event: Event
  ) {
    const eventListeners = this.listeners.get(eventName) ?? new Map([])
    eventListeners.forEach((value) => value(event))
  }
}

export class SimpleEventBus extends AbstractEventBus {}

export const SIMPLE_EVENT_BUS = new SimpleEventBus()
