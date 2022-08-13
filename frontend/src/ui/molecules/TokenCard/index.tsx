import * as S from './styles'
import * as T from './types'

import { Icon } from 'molecules'
import { FlexCenter, FlexSpaceBetween } from 'atoms'

export const TokenCard = ({
  tokenName,
  tokenTicker,
  amount,
  amountFiat,
  isActive = false,
  ...props
}: T.Props) => (
  <S.Wrapper isActive={isActive} {...props}>
    <FlexSpaceBetween>
      <FlexCenter>
        <Icon
          name={tokenTicker}
          isToken
          size="giant"
          background="black"
          color="white"
        />
        <S.Title>
          <span>{tokenName}</span>
          <p>{tokenTicker}</p>
        </S.Title>
      </FlexCenter>
      <S.Price>
        <span>{amount}</span>
        <p>${amountFiat}</p>
      </S.Price>
    </FlexSpaceBetween>
  </S.Wrapper>
)
