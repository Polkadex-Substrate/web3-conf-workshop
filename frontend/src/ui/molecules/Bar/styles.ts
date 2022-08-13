import styled, { css } from 'styled-components'

import * as T from './types'

export const Wrapper = styled.div<T.Props>`
  ${({ theme, percent, background = 'primary', isFull }) => css`
    width: 100%;
    max-width: ${isFull ? 'initial' : '20rem'};
    height: 0.5rem;
    background: ${theme.colors.secondaryBackground};
    border-radius: 1rem;
    div {
      width: ${percent}%;
      height: 100%;
      background: ${theme.colors[background]};
      border-radius: 1rem;
    }
  `}
`
