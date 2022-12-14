import { ReactNode, ButtonHTMLAttributes } from 'react'

import { Colors, Sizes } from 'helpers'
import * as IconProps from 'molecules/Icon/types'

export type Props = {
  children?: ReactNode
  background?: Colors
  color?: Colors
  icon?: IconProps.Props
  isFull?: boolean
  size?: Sizes
} & ButtonHTMLAttributes<HTMLButtonElement>
