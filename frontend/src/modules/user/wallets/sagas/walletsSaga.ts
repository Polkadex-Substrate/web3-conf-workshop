import { call, put, select } from 'redux-saga/effects'

import { walletsError } from '..'
import { sendError, selectRangerApi } from '../../..'
import { WalletsFetch, walletsData, InjectedAccount } from '../actions'
export function* WalletsSaga(action: WalletsFetch) {
  try {
    const api = yield select(selectRangerApi)
    const allAccounts: InjectedAccount[] = yield call(
      getAllPoladotWalletAccounts
    )
    yield put(walletsData({ api, allAccounts }))
  } catch (error) {
    yield put(
      sendError({
        error,
        processingType: 'alert',
        extraOptions: {
          actionError: walletsError,
          params: error.message
        }
      })
    )
  }
}
async function getAllPoladotWalletAccounts(): Promise<InjectedAccount[]> {
  const { web3Accounts, web3Enable } = await import('@polkadot/extension-dapp')
  const extensions = await web3Enable('polkadot')
  if (extensions.length === 0) {
    throw new Error('no extensions installed')
  }
  const allAccounts: any = await web3Accounts()
  return allAccounts.map(account => {
    return {
      address: account.address,
      meta: account.meta,
      type: account.type
    }
  })
}
