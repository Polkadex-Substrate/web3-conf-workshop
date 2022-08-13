import * as T from './types'
import * as S from './styles'

import { Icon } from 'molecules'

export const TransactionTokenCard = ({
  label,
  amount,
  tokenTicker,
  amountInFiat,
  pairInFiat,
  isLeft = false
}: T.Props) => {
  return (
    <S.Wrapper isLeft={isLeft}>
      <S.Container>
        {isLeft && (
          <Icon
            name={tokenTicker}
            isToken
            size="giant"
            background="black"
            color="white"
            style={{ marginRight: '1rem' }}
          />
        )}
        <div>
          <span>{label}</span>
          <p>
            {amount} {tokenTicker}
          </p>
          <small>
            ~{amountInFiat} {pairInFiat}
          </small>
        </div>
        {!isLeft && (
          <Icon
            name={tokenTicker}
            isToken
            size="giant"
            background="inverse"
            style={{ marginLeft: '1rem' }}
          />
        )}
      </S.Container>
    </S.Wrapper>
  )
}
