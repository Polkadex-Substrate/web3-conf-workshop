import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import * as T from './types'
import * as S from './styles'

import {
  selectWalletsAccounts,
  selectWalletsLoading,
  userFetch,
  walletsFetch,
  selectHasUser,
  selectUserInfo,
  logoutFetch
} from 'modules'
import {
  Button,
  LogoComponent,
  SelectAccount,
  MyAccountContent,
  Dropdown,
  Spinner,
  MyAccountHeader
} from 'molecules'

export const Header = ({ loading = false }: T.Props) => {
  const dispatch = useDispatch()
  const accounts = useSelector(selectWalletsAccounts)
  const isAccountsLoading = useSelector(selectWalletsLoading)
  const user = useSelector(selectHasUser)
  const userData = useSelector(selectUserInfo)

  return (
    <S.Wrapper>
      <S.Container>
        <Link href="/">
          <a>
            <LogoComponent />
          </a>
        </Link>
        <S.AsideRight>
          {user ? (
            <Dropdown
              isOpacity
              direction="centerRight"
              header={
                <MyAccountHeader
                  accountName={userData.name}
                  address={userData.address}
                  balance={userData.freeBalance}
                />
              }
            >
              <MyAccountContent
                accountName={userData.name}
                address={userData.address}
                balance={userData.freeBalance}
                onClick={() => dispatch(logoutFetch())}
              />
            </Dropdown>
          ) : (
            <div>
              {accounts?.length ? (
                <Dropdown
                  isOpacity
                  direction="centerRight"
                  header={
                    <SelectAccount
                      accountName={'Select your account'}
                      address={'Please install Polkadot {.js} extension'}
                      isHeader
                    />
                  }
                >
                  <S.SelectAccountContainer>
                    {accounts.length ? (
                      <div>
                        {!isAccountsLoading ? (
                          accounts.map((item, index) => (
                            <SelectAccount
                              key={index}
                              accountName={`${item?.meta.name}`}
                              address={item?.address}
                              onClick={() =>
                                dispatch(userFetch(accounts[index]))
                              }
                            />
                          ))
                        ) : (
                          <Loading isLoadingCard={false} />
                        )}
                      </div>
                    ) : (
                      <Loading />
                    )}
                  </S.SelectAccountContainer>
                </Dropdown>
              ) : (
                <Button
                  type="button"
                  onClick={() => dispatch(walletsFetch())}
                  background="text"
                  color="inverse"
                  icon={{
                    name: 'Wallet',
                    background: 'primaryBackground',
                    size: 'extraMedium'
                  }}
                  disabled={loading}
                >
                  {loading ? 'Loading' : 'Connect to a Wallet'}
                </Button>
              )}
            </div>
          )}
        </S.AsideRight>
      </S.Container>
    </S.Wrapper>
  )
}
const Loading = ({ isLoadingCard = true }) => (
  <S.Loading>
    {isLoadingCard ? (
      <>
        <SelectAccount />
        <SelectAccount />
        <SelectAccount />
      </>
    ) : (
      <S.LoadingContainer>
        <Spinner />
      </S.LoadingContainer>
    )}
  </S.Loading>
)
