import { RootState } from '../..'

import { Alert } from './actions'

export const selectAlertState = (state: RootState): Alert => state.public.alerts
