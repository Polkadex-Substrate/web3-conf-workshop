import { HTMLAttributes } from 'react'

import { TokensName, TokensTicker } from 'helpers'

export type Props = {
  tokenName: TokensName
  tokenTicker: TokensTicker
  amount: string
  amountFiat?: string
  isActive?: boolean
} & HTMLAttributes<HTMLDivElement>
