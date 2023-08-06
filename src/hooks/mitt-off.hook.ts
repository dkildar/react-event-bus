import { useContext } from 'react'
import { MittContext } from '../core'

export function useMittOff() {
  const context = useContext(MittContext)

  return {
    off: context.client.off
  }
}
