import { useContext, useEffect } from 'react'
import { MittContext } from '../core'
import { EventType, Handler, WildcardHandler } from 'mitt'

export function useMittOn<Key extends keyof Record<EventType, unknown>>(
  key: Key,
  cb: Handler<Record<EventType, unknown>[Key]>
): void

export function useMittOn(
  key: '*',
  cb: WildcardHandler<Record<EventType, unknown>>
): void

export function useMittOn(key: any, cb: any) {
  const context = useContext(MittContext)

  useEffect(() => {
    context.client.on(key, cb)
  }, [])
}
