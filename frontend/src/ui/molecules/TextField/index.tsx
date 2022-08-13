import * as T from './types'
import * as S from './styles'

import { ErrorField } from 'molecules'

export const TextField = ({
  label,
  isVertical = true,
  children,
  name,
  error,
  isFull = true
}: T.Props) => {
  return (
    <S.TextFieldWrapper error={error} isVertical={isVertical} isFull={isFull}>
      {label && <label htmlFor={name}>{label}</label>}
      {children}
      {error && <ErrorField isDark={false}> {error} </ErrorField>}
    </S.TextFieldWrapper>
  )
}

export const SecondaryTextField = ({
  name,
  label,
  error,
  children,
  isFull = true
}: T.Props) => {
  return (
    <S.SecondarWrapper isFull={isFull}>
      <label htmlFor={name}>
        {label}
        <S.SecondaryTextInput error={!!error}>{children}</S.SecondaryTextInput>
        {error && <ErrorField isDark={false}> {error}</ErrorField>}
      </label>
    </S.SecondarWrapper>
  )
}
export const TertiaryTextField = ({
  label,
  name,
  error,
  children,
  isFull = true
}: T.Props) => {
  return (
    <S.Wrapper error={!!error} isFull={isFull}>
      <label htmlFor={name}>
        {label}
        <S.Container>{children}</S.Container>
        {error && <ErrorField isDark={false}> {error}</ErrorField>}
      </label>
    </S.Wrapper>
  )
}

export const QuaternaryTextField = ({
  error,
  children,
  isFull = true
}: T.Props) => {
  return (
    <S.TertiaryWrapper error={!!error} isFull={isFull}>
      {children}
      {error && <ErrorField isDark={false}> {error}</ErrorField>}
    </S.TertiaryWrapper>
  )
}
