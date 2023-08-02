import React, { PropsWithChildren } from 'react'

import { MittProvider } from 'react-mitt-wrapper'

const App = ({ children }: PropsWithChildren<unknown>) => {
  return <MittProvider>{children}</MittProvider>
}

export default App
