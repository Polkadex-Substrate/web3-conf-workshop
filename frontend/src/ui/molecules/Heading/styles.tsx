import styled, { css } from 'styled-components'

const sizeModifier = {
  small: () => css`
    font-size: 1.4rem;
  `,
  medium: () => css`
    font-size: 1.6rem;
  `,
  large: () => css`
    font-size: 2rem;
  `
}

export const Wrapper = styled.h1<{ color?: string; size: string }>`
  ${({ theme, size, color }) => css`
    font-weight: 550;
    color: ${theme.colors[color]};
    ${sizeModifier[size]()}
  `}
`
