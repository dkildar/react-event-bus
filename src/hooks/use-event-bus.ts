import { useMemo } from 'react'
import { SIMPLE_EVENT_BUS } from '../core'

export function useEventBus() {
  return useMemo(() => SIMPLE_EVENT_BUS, [])
}
