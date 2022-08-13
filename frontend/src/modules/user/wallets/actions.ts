import { ApiPromise } from '@polkadot/api'

import {
  GET_WALLETS_FETCH,
  GET_WALLETS_FETCH_ERROR,
  GET_WALLETS_DATA,
  RESET_WALLETS_ACCOUNT
} from './constants'

export interface InjectedAccount {
  address: string
  meta: {
    name?: string
    source?: any
  }
  type: any
}
export interface WalletsFetchPayload {
  api: ApiPromise
  allAccounts: InjectedAccount[]
}

export interface WalletsFetch {
  type: typeof GET_WALLETS_FETCH
}

export interface WalletsError {
  type: typeof GET_WALLETS_FETCH_ERROR
  error: string
}

export interface WalletsData {
  type: typeof GET_WALLETS_DATA
  payload: WalletsFetchPayload
}

export interface ResetWallets {
  type: typeof RESET_WALLETS_ACCOUNT
}

export type GetWalletsAction =
  | WalletsFetch
  | WalletsError
  | WalletsData
  | ResetWallets

export const walletsData = (payload: WalletsFetchPayload): WalletsData => ({
  type: GET_WALLETS_DATA,
  payload
})

export const walletsError = (error: string): WalletsError => ({
  type: GET_WALLETS_FETCH_ERROR,
  error
})

export const walletsFetch = (): WalletsFetch => ({
  type: GET_WALLETS_FETCH
})

export const resetWallets = () => ({
  type: RESET_WALLETS_ACCOUNT
})
