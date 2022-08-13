import { Props } from './types'
import * as S from './styles'

import { Icon } from 'molecules'

export const Return = ({
  children,
  icon = 'Return',
  isBack = false,
  color,
  ...props
}: Props) => {
  return (
    <S.Wrapper isBack={isBack} {...props}>
      {!isBack && <Icon color={color} name={icon} size="medium" {...props} />}
      {children}
      {isBack && <Icon color={color} name="Return" {...props} />}
    </S.Wrapper>
  )
}
