import { Formik, Form, Field } from 'formik'

import * as S from './styles'

import {
  Button,
  Icon,
  SwapTextField,
  Heading,
  QuaternaryTextField,
  InfomationCard,
  PriceInformation
} from 'molecules'
import { FlexSpaceBetween } from 'atoms'
import { useBalances, useSwap } from 'hooks'

const defaultValues = {
  amountToSwap: '',
  amountToReceive: ''
}

export const Swap = ({ confirmTransaction, openSelectTokens }) => {
  const { swapPDEX, loading } = useSwap();
    const { ethBalance, pdexBalance } = useBalances(loading);

  return (
    <S.Wrapper>
      <Formik
        initialValues={defaultValues}
        onSubmit={async values => {
          swapPDEX(values.amountToSwap);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <S.Container>
              <S.Header>
                <Heading size="large" as="h1">
                  Swap
                </Heading>
              </S.Header>
              <S.Content>
                <SwapTextField
                  label="You are swapping"
                  pairName="Polkadex"
                  pairTicker="PDEX"
                  balance={pdexBalance}
                  onClick={openSelectTokens}
                >
                  <QuaternaryTextField name="amountToSwap" error="">
                    <Field placeholder="0.00" name="amountToSwap" />
                  </QuaternaryTextField>
                </SwapTextField>
                <Icon name="Swap" size="large" background="primaryBackground" />
                <SwapTextField
                  label="You will receive"
                  pairName="Ethereum"
                  pairTicker="ETH"
                  balance={ethBalance}
                  onClick={openSelectTokens}
                >
                  <QuaternaryTextField name="amountToReceive" error="">
                    <Field placeholder="0.00" name="amountToReceive" />
                  </QuaternaryTextField>
                </SwapTextField>
              </S.Content>
              <S.Footer>
                <FlexSpaceBetween>
                  <Button
                    type="submit"
                    icon={{
                      name: 'Wallet',
                      background: 'primaryBackground',
                      size: 'extraMedium'
                    }}
                  >
                    {loading?"Swapping...":"Swap"}
                  </Button>
                </FlexSpaceBetween>
              </S.Footer>
            </S.Container>
          </Form>
        )}
      </Formik>
    </S.Wrapper>
  )
}
