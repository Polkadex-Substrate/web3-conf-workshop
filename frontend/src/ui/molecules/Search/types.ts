import { InputHTMLAttributes } from 'react'

import { Colors } from 'helpers'

export type Props = {
  background?: Colors
  color?: Colors
  isFull?: boolean
} & InputHTMLAttributes<HTMLInputElement>
