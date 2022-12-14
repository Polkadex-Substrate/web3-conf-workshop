import styled, { css } from 'styled-components'

import { Wrapper as IconWrapper } from 'molecules/Icon/styles'

const sizeModifier = {
  small: () => css`
    font-size: 1.2rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
  `,
  medium: () => css`
    padding: 0.8rem;
    border-radius: 0.8rem;
  `
}
export const Wrapper = styled.button<{
  background?: string
  hasIcon: boolean
  isFull?: boolean
  color?: string
  size?: string
}>`
  ${({
    theme,
    size = 'medium',
    isFull = true,
    background,
    color,
    hasIcon = false
  }) => css`
    border-style: 'none';
    font-weight: 500;
    transition: background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
      color ${theme.transition.default}, opacity ${theme.transition.default};
    width: ${isFull ? '100%' : 'fit-content'};
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${theme.colors[color]};
    background: ${theme.colors[background]};
    white-space: nowrap;
    ${sizeModifier[size]()};
    ${hasIcon &&
    css`
      padding-right: 1rem;
    `}
    ${IconWrapper} {
      margin-right: 0.6rem;
      vertical-align: middle;
    }
    :hover {
      ${background === 'transparent'
        ? css`
            opacity: 0.6;
          `
        : css`
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          `}
    }
  `};
`
