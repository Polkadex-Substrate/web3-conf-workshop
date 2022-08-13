import { takeLatest } from 'redux-saga/effects'

import { GET_WALLETS_FETCH } from '../constants'

import { WalletsSaga } from './walletsSaga'

export function* rootWalletsSaga() {
  yield takeLatest(GET_WALLETS_FETCH, WalletsSaga)
}
