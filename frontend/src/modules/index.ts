import { combineReducers } from 'redux'
import { all, call } from 'redux-saga/effects'

import { errorHandlerReducer, ErrorHandlerState } from './public/errorHandler'
import {
  changeColorThemeReducer,
  ColorThemeState
} from './public/globalSettings'
import { alertReducer, Alert, rootHandleAlertSaga } from './public/alertHandler'
import { rangerReducer, RangerState } from './public/ranger'
import { rootRangerSaga } from './public/ranger/sagas'
import { authReducer, AuthState, rootAuthSaga } from './user/auth'
import { profileReducer, ProfileState, rootProfileSaga } from './user/profile'
import { WalletsState, walletsReducer, rootWalletsSaga } from './user/wallets'

export * from './public/alertHandler'
export * from './public/errorHandler'
export * from './public/globalSettings'
export * from './public/ranger'
export * from './user/auth'
export * from './user/profile'
export * from './user/wallets'

export const reducerPublic = combineReducers({
  colorTheme: changeColorThemeReducer,
  errorHandler: errorHandlerReducer,
  ranger: rangerReducer,
  alerts: alertReducer
})

export const reducerUser = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  wallets: walletsReducer
})

export const rootReducer = combineReducers({
  public: reducerPublic,
  user: reducerUser
})

export type RootState = {
  public: {
    colorTheme: ColorThemeState
    errorHandler: ErrorHandlerState
    ranger: RangerState
    alerts: Alert
  }
  user: {
    auth: AuthState
    profile: ProfileState
    wallets: WalletsState
  }
}

export function* rootSaga() {
  yield all([
    call(rootRangerSaga),
    call(rootWalletsSaga),
    call(rootProfileSaga),
    call(rootAuthSaga),
    call(rootHandleAlertSaga)
  ])
}
