import { Props } from './types'
import * as S from './styles'

import { Icon, SelectOptions } from 'molecules'

export const SwapTextField = ({
  pairName,
  label,
  balance = 0,
  pairTicker,
  handleChangeUnit,
  children,
  background = 'primaryBackground',
  isFull = true,
  ...props
}: Props) => {
  return (
    <S.Wrapper isFull={isFull}>
      <S.Label>{label}</S.Label>
      <S.Container background={background}>
        <SwapHeader
          pairTicker={pairTicker}
          pairName={pairName}
          balance={balance}
          {...props}
        />
        <S.Content>
          <S.Aside>
            {children || '0'}
            <SelectOptions
              label={pairTicker}
              data={['Unit']}
              defaultValue="Unit"
              onChange={handleChangeUnit}
              isSecondaryBackground
            />
          </S.Aside>
          <S.Aside>
            <span> 0.00</span>
            <p>USD</p>
          </S.Aside>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export const SwapHeader = ({
  pairTicker = 'PDEX',
  pairName = 'Polkadex',
  balance,
  ...props
}: Props) => (
  <S.Header role="button" {...props}>
    <S.HeaderAside>
      <Icon
        isToken
        name={pairTicker}
        background="secondaryBackground"
        size="extraGiant"
      />
      <S.HeaderInfo>
        <p>{pairName}</p>
        <span>
          {balance} {pairTicker}
        </span>
      </S.HeaderInfo>
    </S.HeaderAside>
    <S.HeaderAside>
      <Icon
        name="ArrowBottom"
        background="text"
        color="inverse"
        size="extraSmall"
      />
    </S.HeaderAside>
  </S.Header>
)
