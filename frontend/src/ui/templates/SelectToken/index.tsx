import * as S from './styles'

import { Search, TokenCard, Heading, Return } from 'molecules'
import { Container } from 'atoms'

const tokensList = [
  {
    id: 1,
    tokenName: 'Polkadex',
    tokenTicker: 'PDEX',
    amount: '0.838361',
    amountFiat: '0.00'
  },
  {
    id: 2,
    tokenName: 'Polkadot',
    tokenTicker: 'DOT',
    amount: '0.838361',
    amountFiat: '0.00'
  },
  {
    id: 3,
    tokenName: 'AAVE',
    tokenTicker: 'AAVE',
    amount: '0.838361',
    amountFiat: '0.00'
  },
  {
    id: 4,
    tokenName: 'Ethereum',
    tokenTicker: 'ETH',
    amount: '0.838361',
    amountFiat: '0.00'
  }
]

export const SelectToken = ({ handleClick }) => {
  return (
    <S.Wrapper>
      <S.Main>
        <Container>
          <S.Header>
            <Return color="black" onClick={handleClick}>
              <Heading color="black" size="medium" as="h2">
                Select Token
              </Heading>
            </Return>
          </S.Header>
          <S.Content>
            <S.Aside>
              <S.Search>
                <span>You are swapping</span>
                <Search
                  color="black"
                  placeholder="Search name or paste address"
                />
              </S.Search>
              <S.Tokens>
                {!!tokensList.length &&
                  tokensList.map(token => (
                    <TokenCard
                      key={token.id}
                      tokenName={token.tokenName}
                      tokenTicker={token.tokenTicker}
                      amount={token.amount}
                      amountFiat={token.amountFiat}
                      onClick={() => console.log('Token Pair:', token)}
                    />
                  ))}
              </S.Tokens>
            </S.Aside>
            <S.Aside>
              <S.Search>
                <span>You will receive</span>
                <Search
                  color="black"
                  placeholder="Search name or paste address"
                />
              </S.Search>
              <S.Tokens>
                {!!tokensList.length &&
                  tokensList.map(token => (
                    <TokenCard
                      key={token.id}
                      tokenName={token.tokenName}
                      tokenTicker={token.tokenTicker}
                      amount={token.amount}
                      amountFiat={token.amountFiat}
                      onClick={() => console.log('Token Selected:', token)}
                    />
                  ))}
              </S.Tokens>
            </S.Aside>
          </S.Content>
        </Container>
      </S.Main>
    </S.Wrapper>
  )
}
