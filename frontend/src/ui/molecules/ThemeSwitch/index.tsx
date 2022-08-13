import * as T from './types'
import * as S from './styles'

import { Icon } from 'molecules'

export const ThemeSwitch = ({
  onChangeLight,
  onChangeDark,
  isDark
}: T.Props) => (
  <S.Wrapper>
    <Icon
      onClick={onChangeDark}
      isActive={isDark}
      size="extraMedium"
      name="Sun"
    />
    <Icon
      onClick={onChangeLight}
      isActive={!isDark}
      size="extraMedium"
      name="Moon"
    />
  </S.Wrapper>
)
