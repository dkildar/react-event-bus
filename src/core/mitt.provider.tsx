import React, { PropsWithChildren } from 'react'
import { MittContext } from './mitt.context'
import mitt from 'mitt'

export function MittProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <MittContext.Provider value={{ client: mitt() }}>
      {children}
    </MittContext.Provider>
  )
}
