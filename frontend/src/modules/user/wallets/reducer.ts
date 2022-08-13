import { ApiPromise } from '@polkadot/api'

import { GetWalletsAction, InjectedAccount } from './actions'
import {
  GET_WALLETS_FETCH,
  GET_WALLETS_FETCH_ERROR,
  GET_WALLETS_DATA,
  RESET_WALLETS_ACCOUNT
} from './constants'

export interface WalletsState {
  loading: boolean
  getApiSuccess: boolean
  api?: ApiPromise
  allAccounts: InjectedAccount[]
}

const initialState: WalletsState = {
  loading: false,
  getApiSuccess: false,
  allAccounts: []
}

export const walletsReducer = (
  state = initialState,
  action: GetWalletsAction
): WalletsState => {
  switch (action.type) {
    case GET_WALLETS_DATA:
      return {
        ...state,
        api: action.payload.api,
        loading: false,
        allAccounts: action.payload.allAccounts
      }
    case GET_WALLETS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        getApiSuccess: false
      }
    case GET_WALLETS_FETCH:
      return {
        ...state,
        loading: true
      }

    case RESET_WALLETS_ACCOUNT:
      return {
        ...initialState
      }
    default:
      return state
  }
}
