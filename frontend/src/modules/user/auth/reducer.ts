import { AuthAction } from './actions'
import {
  AUTH_LOGOUT_FAILURE,
  AUTH_LOGOUT_FETCH,
  AUTH_SIGN_IN_DATA,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_FETCH
} from './constants'

export interface AuthState {
  authError?: string // Replace CommomError
  signInError?: string
  signInLoading: boolean
  signInSuccess: boolean
}

export const initialStateAuth: AuthState = {
  signInLoading: false,
  signInSuccess: false
}

export const authReducer = (state = initialStateAuth, action: AuthAction) => {
  switch (action.type) {
    case AUTH_SIGN_IN_FETCH:
      return { ...state, signInLoading: true }
    case AUTH_SIGN_IN_DATA:
      return { ...state, signInLoading: false, signInSuccess: true }
    case AUTH_SIGN_IN_ERROR:
      return { ...state, authError: 'Sign In Error..', signInLoading: false }
    case AUTH_LOGOUT_FETCH:
      return { ...state }
    case AUTH_LOGOUT_FAILURE:
      return { ...state, logoutError: 'Logout Error..' }
    default:
      return state
  }
}
