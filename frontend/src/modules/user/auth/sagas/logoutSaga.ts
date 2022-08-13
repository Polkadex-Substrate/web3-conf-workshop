import { put } from 'redux-saga/effects'

import { userReset } from 'modules'

export function* logoutSaga() {
  try {
    yield put(userReset())
    localStorage.removeItem('csrfToken')
  } catch (error) {
    // Error Alert..
    console.log('Error', error.message)
  }
}
