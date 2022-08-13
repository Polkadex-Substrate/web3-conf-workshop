import * as T from './types'
import * as S from './styles'

import { Icon } from 'molecules'

export const Search = ({
  background = 'secondaryBackground',
  color = 'inverse',
  isFull = true,
  ...props
}: T.Props) => (
  <S.Wrapper color={color} background={background} isFull={isFull}>
    <Icon name="Search" size="medium" color={color} />
    <input {...props} />
  </S.Wrapper>
)
