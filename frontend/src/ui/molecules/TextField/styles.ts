import styled, { css } from 'styled-components'

import * as T from './types'
export const TextFieldWrapper = styled.div<Partial<T.Props>>`
  ${({ theme, error, isVertical = false, isFull = true }) => css`
    display: flex;
    align-items: ${isVertical ? 'flex-start' : 'center'};
    flex-direction: ${isVertical ? 'column' : 'row'};
    font-size: 2.2rem;
    label {
      font-size: 1.3rem;
      display: block;
      margin-bottom: ${isVertical ? '0.7rem' : 0};
    }
    input {
      width: 100%;
      flex-grow: 1;
      color: ${error ? theme.colors.primary : theme.colors.text};
    }
    ${isFull &&
    css`
      flex: 1;
    `}
  `}
`

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    span {
      display: block;
      color: ${theme.colors.primary}
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  `}
`

export const Container = styled.div``
export const Error = styled.span<{ isDark?: boolean }>`
  ${({ theme, isDark }) => css`
    font-size: 1.2rem;
    margin-top: 0.5rem;
    display: block;
    color: ${isDark ? theme.colors.text : theme.colors.primary};
    ${isDark &&
    css`
      background: ${theme.colors.primary}4C;
      border: 1px solid ${theme.colors.primary};
      border-radius: 0.2rem;
      padding: 0.5rem;
      width: fit-content;
      font-weight: 500;
    `}
  `}
`

export const Wrapper = styled.div<{ error?: boolean; isFull: boolean }>`
  ${({ theme, error, isFull = true }) => css`
    margin-bottom: 1.8rem;
    ${isFull &&
    css`
      flex: 1;
    `}
    label {
      font-size: 1.3rem;
      display: block;
      margin-bottom: 1.2rem;
    }

    input,
    textarea {
      width: 100%;
      flex-grow: 1;
      color: ${theme.colors.text};
    }
    ${Container} {
      margin-top: 1.2rem;
      textarea,
      input {
        margin-bottom: 0.3rem;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid;
        color: ${error ? theme.colors.primary : theme.colors.text};
        border-bottom-color: ${error
          ? theme.colors.primary
          : theme.colors.secondaryBackground};
      }
    }
  `}
`

export const SecondarWrapper = styled(Wrapper)`
  ${({ theme }) => css`
    :not(:last-child) {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid;
      border-bottom-color: ${theme.colors.secondaryBackground};
    }
    margin-bottom: 2rem;
  `}
`

export const SecondaryTextInput = styled.div<{ error?: boolean }>`
  ${({ theme, error }) => css`
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.secondaryBackground};
    border: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    padding: 0.5rem;
    border-radius: 0.5rem;
    p {
      padding: 0.7rem;
      border-radius: 0.3rem;
      background-color: ${theme.colors.primaryBackgroundOpacity};
      font-size: 1.2rem;
      white-space: nowrap;
    }
    input {
      padding-left: 0.5rem;
      color: ${error ? theme.colors.primary : theme.colors.text};
    }
  `}
`

export const TertiaryWrapper = styled.div<{
  error?: boolean
  isFull?: boolean
}>`
  ${({ theme, isFull, error }) => css`
    input {
      font-size: 3rem;
      width: 100%;
      color: ${error ? theme.colors.primary : theme.colors.text};
    }
    ${isFull &&
    css`
      flex: 1;
    `}
  `}
`
