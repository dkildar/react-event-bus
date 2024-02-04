import { useEventBus } from './use-event-bus'

export function useEventBusPublish() {
  const eventBus = useEventBus()

  return <EventKey extends string, Event extends unknown>(
    eventKey: EventKey,
    event: Event
  ) => {
    eventBus.publish(eventKey, event)
  }
}
