import { call, put } from 'redux-saga/effects'

import { alertPush } from '../../alertHandler'
import { ErrorHandlerFetch, getErrorData } from '../actions'

export function* handleErrorSaga(action: ErrorHandlerFetch) {
  const { processingType, error, extraOptions } = action.payload

  if (extraOptions?.params)
    yield put(extraOptions.actionError(extraOptions.params))

  switch (processingType) {
    case 'alert':
      yield call(handleAlertError, error)
      break
    case 'console':
      yield call(handleConsoleError, error)
      break
    default:
      break
  }

  yield put(getErrorData())
}
function* handleAlertError(error) {
  yield put(
    alertPush({
      message: {
        title: 'Error',
        description: error.message
      },
      type: 'Alert'
    })
  )
}

function* handleConsoleError(error) {
  yield call(() => process.browser && window.console.log(error.message))
}
