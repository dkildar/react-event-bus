import { useEventBus } from './use-event-bus'
import { useEffect } from 'react'
import { KindOfListener } from '../core'

export function useEventBusOn<EventKey extends string, Event extends unknown>(
  eventKey: EventKey,
  listener: KindOfListener<Event>
) {
  const eventBus = useEventBus()

  return useEffect(() => {
    const id = eventBus.addEventListener(eventKey, listener)

    return () => {
      eventBus.removeEventListener(eventKey, id)
    }
  }, [eventKey, listener])
}
