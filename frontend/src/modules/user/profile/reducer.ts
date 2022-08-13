import { ProfileAction } from './actions'
import {
  PROFILE_RESET_USER,
  PROFILE_USER_DATA,
  PROFILE_USER_ERROR,
  PROFILE_USER_FETCH
} from './constants'
import { User } from './types'

export interface ProfileState {
  userData: {
    user: User
    error?: string
    isFetching: boolean
    success?: boolean
  }
}

export const defaultUser: User = {
  account: '',
  address: '',
  injector: '',
  freeBalance: '',
  name: ''
}

export const initialStateProfile: ProfileState = {
  userData: {
    user: defaultUser,
    isFetching: false
  }
}

export const userReducer = (
  state: ProfileState['userData'],
  action: ProfileAction
) => {
  switch (action.type) {
    case PROFILE_USER_FETCH:
      return {
        ...state,
        isFetching: true
      }
    case PROFILE_USER_DATA:
      return {
        ...state,
        isFetching: false,
        user: action.payload.user
      }

    case PROFILE_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case PROFILE_RESET_USER:
      return {
        ...state,
        user: initialStateProfile.userData.user
      }
    default:
      return state
  }
}

export const profileReducer = (
  state = initialStateProfile,
  action: ProfileAction
) => {
  switch (action.type) {
    case PROFILE_USER_FETCH:
    case PROFILE_USER_DATA:
    case PROFILE_RESET_USER:
    case PROFILE_USER_ERROR: {
      const userState = { ...state.userData }
      return {
        ...state,
        userData: userReducer(userState, action)
      }
    }
    default:
      return state
  }
}
