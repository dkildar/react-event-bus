# react-mitt-wrapper

> React provder and hooks for using Mitt events library

[![NPM](https://img.shields.io/npm/v/react-mitt-wrapper.svg)](https://www.npmjs.com/package/react-mitt-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mitt-wrapper
```

## Usage

```tsx
import React, {Component} from 'react'

import {MittProvider} from 'react-mitt-wrapper'
import {useMittOn} from "./mitt-on.hook";

export function App() {
  return <MittProvider>
    <Foo />
  </MittProvider>
}

export function Foo() {
  useMittOn('myEvent', (eventData) => {
    console.log(eventData)
  })

  return <></>
}
```

## Hooks
`useMittOn(eventType, callback)` – uses for subscribing to the event
`useMittOff(eventType, callback)` – uses for unsubscribing from the event
`useMittEmit()` – uses for emitting value to the event. Returns `emit` function for it
`useMittClear()` – uses for clearing all events

## License

MIT © [dkildar](https://github.com/dkildar)
