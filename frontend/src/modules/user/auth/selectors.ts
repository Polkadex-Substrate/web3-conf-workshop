import { AuthState } from './reducer'

import { RootState } from 'modules'

export const selectSignInLoading = (
  state: RootState
): AuthState['signInLoading'] => state.user.auth.signInLoading

export const selectSignInError = (state: RootState): AuthState['authError'] =>
  state.user.auth.authError
