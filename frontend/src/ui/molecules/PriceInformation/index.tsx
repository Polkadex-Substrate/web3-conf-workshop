import * as T from './types'
import * as S from './styles'

import { Icon } from 'molecules'

export const PriceInformation = ({
  amount,
  tokenPair,
  tokenTicker,
  price,
  color = 'inverse'
}: T.Props) => {
  return (
    <S.Wrapper color={color}>
      <Icon
        name="Exchange"
        size="medium"
        color={color === 'inverse' ? 'text' : 'white'}
        background={color}
      />
      <p>
        Price
        <strong>
          {amount} {tokenPair} = {price} {tokenTicker}
        </strong>
      </p>
    </S.Wrapper>
  )
}
