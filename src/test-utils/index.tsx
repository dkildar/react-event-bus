import { createContext, ReactNode } from 'react'
import { Emitter } from 'mitt'
import React from 'react'

const FAKE_MITT: Emitter<any> = {
  all: new Map(),
  off: jest.fn(),
  on: jest.fn(),
  emit: jest.fn()
}
const FakeMittContext = createContext({
  client: FAKE_MITT
})

export function withFakeMitt(node: ReactNode) {
  return (
    <FakeMittContext.Provider value={{ client: FAKE_MITT }}>
      {node}
    </FakeMittContext.Provider>
  )
}
