import { call, put, take } from 'redux-saga/effects'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { eventChannel } from '@redux-saga/core'

import { alertPush } from '../../../'
import { rangerConnectError, rangerConnectData } from '../actions'
import { CustomTypes as types, rpc } from '../types'

import { rangerUrl } from 'api'

export function* rangerFetchSaga() {
  try {
    const channel = yield call(() => fetchRanger())
    while (true) {
      const action = yield take(channel)
      yield put(action)
    }
  } catch (error) {
    yield put(
      alertPush({
        message: {
          title: 'Something has gone wrong..',
          description: error.message
        },
        type: 'Error'
      })
    )
  }
}

function* fetchRanger() {
  const { web3Enable } = yield call(() => import('@polkadot/extension-dapp'))
  yield call(() => web3Enable('PolkadexIdo'))

  return eventChannel(emitter => {
    const baseUrl = rangerUrl()
    const provider = new WsProvider(baseUrl)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const api = new ApiPromise({ provider, types, rpc })

    api.on('connected', () => {
      return emitter(rangerConnectData(api))
    })

    api.on('error', error => {
      console.log('Error', error)
      return emitter(rangerConnectError())
    })

    api.on('disconnected', () => {
      return emitter(rangerConnectError())
    })

    return () => {
      api.disconnect()
    }
  })
}
