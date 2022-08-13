import { RootState } from '../..'

import { ColorThemeState } from './reducer'

export const selectCurrentColorTheme = (
  state: RootState
): ColorThemeState['color'] => state.public.colorTheme.color

export const selectCurrentDarkTheme = (state: RootState): boolean =>
  state.public.colorTheme.color === 'dark'
