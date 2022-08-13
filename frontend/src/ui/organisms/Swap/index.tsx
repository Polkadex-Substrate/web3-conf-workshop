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

const defaultValues = {
  amountToSwap: '',
  amountToReceive: ''
}

export const Swap = ({ confirmTransaction, openSelectTokens }) => {
  return (
    <S.Wrapper>
      <Formik
        initialValues={defaultValues}
        onSubmit={async values => {
          console.log(values)
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
                  balance={0.93019292}
                  onClick={openSelectTokens}
                >
                  <QuaternaryTextField name="amountToSwap" error="">
                    <Field placeholder="0.00" name="amountToSwap" />
                  </QuaternaryTextField>
                </SwapTextField>
                <Icon name="Swap" size="large" background="primaryBackground" />
                <SwapTextField
                  label="You will receive"
                  pairName="Polkadot"
                  pairTicker="DOT"
                  balance={0}
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
                    type="button"
                    onClick={confirmTransaction}
                    icon={{
                      name: 'Wallet',
                      background: 'primaryBackground',
                      size: 'extraMedium'
                    }}
                  >
                    Swap
                  </Button>
                  <PriceInformation
                    amount="1"
                    tokenPair="PDEX"
                    tokenTicker="DOT"
                    price="1506.73"
                  />
                </FlexSpaceBetween>
              </S.Footer>
            </S.Container>
            <S.TransactionContainer
              isActive={!!values.amountToReceive && !!values.amountToSwap}
            >
              <InfomationCard
                label="Minimum for Feeless"
                tooltipText="Minimum for Feeless Text here"
              >
                0.91000100 PDEX
              </InfomationCard>
              <InfomationCard
                label="Unlocking Block Number"
                tooltipText="Unlocking Block Number Text here"
              >
                1079820491
              </InfomationCard>
              <InfomationCard
                label="Average Amount for Feeless"
                tooltipText="Average Amount for Feeless Text here"
              >
                0.9000000 PDEX
              </InfomationCard>
              <InfomationCard
                label="Average Unlocking Period"
                tooltipText="Average Unlocking Period Text here"
              >
                15 Min
              </InfomationCard>
            </S.TransactionContainer>
          </Form>
        )}
      </Formik>
    </S.Wrapper>
  )
}
