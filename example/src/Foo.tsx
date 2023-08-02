import { useMittEmit, useMittOn } from 'react-mitt-wrapper'
import React, { useState } from 'react'

export function Foo() {
  const { emit } = useMittEmit()

  const [eventResults, setEventResults] = useState<object[]>([])

  useMittOn('testEvent', (event: object) => {
    setEventResults([...eventResults, event])
  })

  return (
    <div>
      {eventResults.map((event, i) => {
        return <pre key={i}>{JSON.stringify(event)}</pre>
      })}
      <button onClick={() => emit('testEvent', { message: 'hello!' })}>
        Click me!
      </button>
    </div>
  )
}
