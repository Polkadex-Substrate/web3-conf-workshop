import { ReactNode } from 'react'

import { Colors } from 'helpers'

export type Props = {
  message: string
  background: Colors
  children: ReactNode
  isFull?: boolean
}
