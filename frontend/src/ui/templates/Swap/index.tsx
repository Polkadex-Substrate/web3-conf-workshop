import Head from 'next/head'
import { useState } from 'react'

import * as S from './styles'

import { Popup } from 'molecules'
import { ConfirmTransaction } from 'templates'
import { Footer, Header, Swap } from 'organisms'

export const SwapTemplate = () => {
  const [state, setState] = useState(false)
  const [active, setActive] = useState(false)

  const openSelectTokens = () => setState(false)
  const confirmTransaction = () => setActive(!active)
  return (
    <S.Wrapper>
      <Head>
        <title>Swap Tokens</title>
      </Head>
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
