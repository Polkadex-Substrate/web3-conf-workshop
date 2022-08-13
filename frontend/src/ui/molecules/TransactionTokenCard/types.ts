import { TokensTicker } from 'helpers'

export type Props = {
  label: string
  amount: string
  tokenTicker: TokensTicker
  amountInFiat: string
  pairInFiat: string
  isLeft?: boolean
}
