# React event bus

> React event bus

[![NPM](https://img.shields.io/npm/v/react-event-bus.svg)](https://www.npmjs.com/package/-event-bus) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-event-bus
```

## Usage

```tsx
import React, {Component} from 'react'

import {useEventBusOn} from 'react-mitt-wrapper'

export function App() {
  return <Foo />
}

export function Foo() {
  useEventBusOn('myEvent', (eventData) => {
    console.log(eventData)
  })

  return <></>
}
```

## Hooks
`useEventBus()` – retrieve event bus instance

`useEventBusOn(eventKey, listener)` – assign specific listener function to event

`useEventBusPiblish()` – uses for publishing events

## License

MIT © [dkildar](https://github.com/dkildar)
