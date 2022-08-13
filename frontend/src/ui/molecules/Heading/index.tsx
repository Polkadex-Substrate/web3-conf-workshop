import * as T from './types'
import * as S from './styles'

export const Heading = ({
  color = 'inverse',
  size = 'small',
  as = 'h1',
  children
}: T.Props) => {
  return (
    <S.Wrapper color={color} size={size} as={as}>
      {children}
    </S.Wrapper>
  )
}
