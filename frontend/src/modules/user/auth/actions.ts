import {
  AUTH_LOGOUT_FAILURE,
  AUTH_LOGOUT_FETCH,
  AUTH_SIGN_IN_DATA,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_FETCH
} from './constants'

export interface SignInFetch {
  type: typeof AUTH_SIGN_IN_FETCH
}

export interface SignInError {
  type: typeof AUTH_SIGN_IN_ERROR
  error: string
}

export interface SignInData {
  type: typeof AUTH_SIGN_IN_DATA
}
export interface LogoutFetch {
  type: typeof AUTH_LOGOUT_FETCH
}

export interface LogoutFailed {
  type: typeof AUTH_LOGOUT_FAILURE
  error: string
}
export type AuthAction =
  | SignInFetch
  | SignInData
  | SignInError
  | LogoutFetch
  | LogoutFailed

export const signIn = (): SignInFetch => ({
  type: AUTH_SIGN_IN_FETCH
})

export const signInData = (): SignInData => ({
  type: AUTH_SIGN_IN_DATA
})

export const signInError = (error: string): SignInError => ({
  type: AUTH_SIGN_IN_ERROR,
  error
})

export const logoutFetch = (): LogoutFetch => ({
  type: AUTH_LOGOUT_FETCH
})

export const logoutError = (error: string): LogoutFailed => ({
  type: AUTH_LOGOUT_FAILURE,
  error
})
