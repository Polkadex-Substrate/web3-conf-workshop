import { User } from './types'

import { RootState } from 'modules'

export const selectUserInfo = (state: RootState): User =>
  state.user.profile.userData.user

export const selectHasUser = (state: RootState): boolean =>
  !!state.user.profile.userData.user.address

export const selectUserFetching = (state: RootState): boolean =>
  state.user.profile.userData.isFetching
