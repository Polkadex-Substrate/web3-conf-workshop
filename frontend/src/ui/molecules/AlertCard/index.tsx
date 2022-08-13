import * as S from './styles'
import * as T from './types'

import { Icon } from 'molecules'

export const AlertCard = ({
  title = 'Example',
  description = 'Description',
  ...props
}: T.Props) => (
  <S.Wrapper>
    <S.Aside>
      <span>{title}</span>
      <p>{description}</p>
    </S.Aside>
    <Icon
      name="Close"
      {...props}
      style={{ cursor: 'pointer', width: '1rem' }}
    />
  </S.Wrapper>
)
