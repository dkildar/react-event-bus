import { useContext } from 'react'
import { MittContext } from '../core'

export function useMittEmit() {
  const context = useContext(MittContext)

  return {
    emit: (key: string, data: unknown) => {
      context.client.emit(key, data)
    }
  }
}
