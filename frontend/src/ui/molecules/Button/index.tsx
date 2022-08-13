import * as S from './styles'
import * as T from './types'

import { Icon } from 'molecules'

export const Button = ({
  isFull = false,
  icon,
  background = 'secondaryBackground',
  color = 'inverse',
  children,
  size = 'medium',
  ...props
}: T.Props) => (
  <S.Wrapper
    size={size}
    background={background}
    color={color}
    isFull={isFull}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && <Icon {...icon} />}
    {children}
  </S.Wrapper>
)
