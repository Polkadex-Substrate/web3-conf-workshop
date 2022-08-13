import styled, { css } from 'styled-components'

export const Wrapper = styled.span<{ isDark?: boolean }>`
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
