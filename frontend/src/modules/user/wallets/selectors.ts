import { ApiPromise } from '@polkadot/api'

import { RootState } from '../..'

import { InjectedAccount } from './'

export const selectWalletApi = (state: RootState): ApiPromise | undefined =>
  state.user.wallets.api

export const selectWalletsLoading = (state: RootState): boolean =>
  state.user.wallets.loading

export const selectWalletsAccounts = (state: RootState): InjectedAccount[] =>
  state.user.wallets.allAccounts
