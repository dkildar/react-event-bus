import { useContext } from 'react'
import { MittContext } from '../core'

export function useMittClear() {
  const context = useContext(MittContext)

  return {
    clear: () => context.client.all.clear()
  }
}
