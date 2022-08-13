import { FormEvent, ReactNode, HTMLAttributes } from 'react'

import { TokensTicker, TokensName, Colors } from 'helpers'

export type Props = {
  pairName?: TokensName
  balance?: number
  pairTicker?: TokensTicker
  handleChangeUnit?: (e: FormEvent<HTMLSelectElement>) => void
  children?: ReactNode
  label?: string
  background?: Colors
  isFull?: boolean
} & HTMLAttributes<HTMLDivElement>
