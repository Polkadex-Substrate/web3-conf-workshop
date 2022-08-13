import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ background?: string; isFull?: boolean }>`
  ${({
    theme,
    color = 'inverse',
    background = 'primaryBackgroundOpacity',
    isFull
  }) => css`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.6rem;
    box-shadow: ${theme.shadows.tertiary};
    background: ${theme.colors[background]};
    max-width: ${isFull ? 'initial' : '40rem'};
    flex: 1;
    input {
      flex-grow: 1;
      background: none;
      border: none;
      color: ${theme.colors[color]};
      margin-left: 1rem;
    }
  `}
`
