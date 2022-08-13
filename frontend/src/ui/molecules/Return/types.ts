import { HTMLAttributes, ReactNode } from 'react'

import { Colors } from 'helpers'

export type Props = {
  children: string | ReactNode
  isBack?: boolean
  icon?: 'Close' | 'Return'
  color?: Colors
} & HTMLAttributes<HTMLDivElement>
