import { createContext } from 'react'
import mitt from 'mitt'

export const MittContext = createContext({ client: mitt() })
