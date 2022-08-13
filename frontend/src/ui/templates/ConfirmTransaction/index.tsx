import {
  Return,
  Heading,
  Button,
  Icon,
  TransactionTokenCard,
  Badge,
  InfomationCardInvert,
  PriceInformation
} from 'molecules'
import { FlexCenter } from 'atoms'

import * as S from './styles'

export const ConfirmTransaction = ({ handleClick }) => {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Container>
          <S.Header>
            <Return color="black" onClick={handleClick}>
              <Heading color="black" size="medium" as="h2">
                Confirm Transaction
              </Heading>
            </Return>
          </S.Header>
          <S.Content>
            <S.InfoHeader>
              <TransactionTokenCard
                label="You are exchanging"
                amount="0.93871332"
                tokenTicker="DOT"
                amountInFiat="0.00"
                pairInFiat="USD"
              />
              <Icon
                name="Swap"
                size="medium"
                color="black"
                style={{ marginTop: '2rem' }}
              />
              <TransactionTokenCard
                label="You will receive"
                amount="0.93871332"
                tokenTicker="PDEX"
                amountInFiat="0.00"
                pairInFiat="USD"
                isLeft
              />
            </S.InfoHeader>
            <S.InfoContent>
              <InfomationCardInvert
                label="Minimum"
                tooltipText="Minimum Text here"
                isHorizontal
              >
                0.984330 DEX
              </InfomationCardInvert>
              <InfomationCardInvert
                label="Price Impact"
                tooltipText="Price Impact Text here"
                isHorizontal
              >
                0.0005 DEX
              </InfomationCardInvert>
              <InfomationCardInvert
                label="Price Impact"
                tooltipText="Price Impact Text here"
                isHorizontal
              >
                <Badge background="green">0.01%</Badge>
              </InfomationCardInvert>
            </S.InfoContent>
            <S.InfoFooter>
              Output is estimated.
              <strong>You will receive at least 0.984330 DEX </strong> or the
              transaction will revert.
            </S.InfoFooter>
          </S.Content>
          <S.Footer>
            <FlexCenter>
              <Button
                type="button"
                color="black"
                icon={{
                  name: 'Exchange',
                  background: 'black',
                  color: 'white',
                  size: 'extraMedium'
                }}
                onClick={() => console.log('...')}
              >
                Confirm Swap
              </Button>
              <Button
                type="button"
                onClick={handleClick}
                background="transparent"
                color="black"
                style={{ marginLeft: '1rem' }}
              >
                Cancel
              </Button>
            </FlexCenter>
            <PriceInformation
              amount="1"
              tokenPair="PDEX"
              tokenTicker="DOT"
              price="1506.73"
              color="black"
            />
          </S.Footer>
        </S.Container>
      </S.Main>
    </S.Wrapper>
  )
}
