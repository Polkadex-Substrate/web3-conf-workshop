import { call, put, select } from 'redux-saga/effects'
import { ApiPromise } from '@polkadot/api'

import { userData } from '../actions'
import { UserFetch } from '..'

import { selectRangerApi, sendError, userError } from 'modules'
import { formatToUnitStr } from 'hooks'

export function* userSaga({ payload }: UserFetch) {
  try {
    const api = yield select(selectRangerApi)
    const { injector } = yield call(() => fetchUserDataAsync(payload))
    const allBalances = yield call(() =>
      fetchBalanceAsync(api, payload.address)
    )
    const user = {
      account: payload,
      name: payload.meta.name,
      address: payload.address,
      injector: injector,
      freeBalance: convertDataToString(allBalances.polkadex),
      allBalances
    }
    console.log(user)
    yield put(userData({ user }))
  } catch (error) {
    yield put(
      sendError({
        error,
        processingType: 'alert',
        extraOptions: {
          actionError: userError,
          params: error.message
        }
      })
    )
  }
}

function* fetchUserDataAsync(payload: UserFetch['payload']) {
  const { web3FromAddress } = yield call(
    () => import('@polkadot/extension-dapp')
  )
  const injector = yield call(() => web3FromAddress(payload.address))
  return { injector }
}

export const convertDataToString = (value: string | number | bigint): string =>
  BigInt(value).toString()

const fetchBalanceAsync = async (api: ApiPromise, address: string) => {
  const {
    data: { free: previousFree }
  } = await api.query.system.account(address)
  const polkadexBalance = previousFree.toString()
  return {
    polkadex: formatToUnitStr(polkadexBalance)
  }
}
