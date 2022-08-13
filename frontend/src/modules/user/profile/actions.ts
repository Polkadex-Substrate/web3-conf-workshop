import {
  PROFILE_RESET_USER,
  PROFILE_USER_DATA,
  PROFILE_USER_ERROR,
  PROFILE_USER_FETCH
} from './constants'
import { User } from './types'

import { InjectedAccount } from 'modules'

export interface UserReset {
  type: typeof PROFILE_RESET_USER
}

export interface UserFetch {
  type: typeof PROFILE_USER_FETCH
  payload: InjectedAccount
}

export interface UserInfo {
  type: typeof PROFILE_USER_DATA
  payload: {
    user: User
  }
}

export interface UserError {
  type: typeof PROFILE_USER_ERROR
  error: string
}

export type ProfileAction = UserFetch | UserInfo | UserError | UserReset

export const userFetch = (payload: UserFetch['payload']): UserFetch => ({
  type: PROFILE_USER_FETCH,
  payload
})

export const userData = (payload: UserInfo['payload']): UserInfo => ({
  type: PROFILE_USER_DATA,
  payload
})

export const userError = (error: string): UserError => ({
  type: PROFILE_USER_ERROR,
  error
})

export const userReset = (): UserReset => ({
  type: PROFILE_RESET_USER
})
