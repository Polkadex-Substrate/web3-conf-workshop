import Head from 'next/head'
import { useState } from 'react'

import * as S from './styles'

import { Popup } from 'molecules'
import { ConfirmTransaction, SelectToken } from 'templates'
import { Footer, Header, Swap } from 'organisms'

export const SwapTemplate = () => {
  const [state, setState] = useState(false)
  const [active, setActive] = useState(false)

  const openSelectTokens = () => setState(!state)
  const confirmTransaction = () => setActive(!active)
  return (
    <S.Wrapper>
      <Head>
        <title>Swap Tokens</title>
      </Head>
      <Popup isVisible={state} onClose={openSelectTokens}>
        <SelectToken handleClick={openSelectTokens} />
      </Popup>
      <Popup isVisible={active} onClose={confirmTransaction}>
        <ConfirmTransaction handleClick={confirmTransaction} />
      </Popup>
      <Header />
      <S.Main>
        <Swap
          openSelectTokens={openSelectTokens}
          confirmTransaction={confirmTransaction}
        />
      </S.Main>
      <Footer />
    </S.Wrapper>
  )
}
