import * as S from './styles'
import * as T from './types'

export const ErrorField = ({ children, isDark }: T.Props) => {
  return <S.Wrapper isDark={isDark}>{children}</S.Wrapper>
}
