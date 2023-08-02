import { EventType, Handler, WildcardHandler } from 'mitt'
import { useContext, useEffect } from 'react'
import { MittContext } from '../core'

export function useMittOff<
  Events extends Record<EventType, unknown>,
  Key extends keyof Events
>(key: Key, cb: Handler<Events[Key]>): void

export function useMittOff(
  key: '*',
  cb: WildcardHandler<Record<EventType, unknown>>
): void

export function useMittOff(key: any, cb: any) {
  const context = useContext(MittContext)

  useEffect(() => {
    context.client.on(key, cb)
  }, [])
}
