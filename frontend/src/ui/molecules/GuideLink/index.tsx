import * as T from './types'
import * as S from './styles'

import { Icon } from 'molecules'

export const GuideLink = ({ children, ...props }: T.Props) => (
  <S.Wrapper target="_blank" {...props}>
    <Icon name="Medium" size="medium" background="secondaryBackground" />
    {children}
    <Icon name="Return" style={{ transform: 'rotate(180deg)' }} />
  </S.Wrapper>
)
