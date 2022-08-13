import styled, { css } from 'styled-components'

import { Wrapper as IconWrapper } from 'molecules/Icon/styles'

export const Select = styled.div`
  display: inline-block;
  position: relative;
  ${IconWrapper} {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Wrapper = styled.div<{
  withElement?: boolean
  isSecondaryBackground?: boolean
}>`
  ${({ theme, withElement, isSecondaryBackground }) => css`
    display: flex;
    align-items: center;
    background: ${isSecondaryBackground
      ? theme.colors.secondaryBackgroundOpacity
      : theme.colors.gradientBackground};
    white-space: nowrap;
    border-radius: 0.3rem;
    padding: 0.2rem;

    select {
      position: relative;
      text-transform: capitalize;
      padding: 0.4rem 1.5rem 0.4rem 0.4rem;
      z-index: 10;
    }
    span {
      display: block;
      padding: 0 0.2rem;
    }
    ${withElement &&
    css`
      ${Select} {
        background: ${theme.colors.secondaryBackground};
        border-radius: 0.3rem;
        margin-right: 0.4rem;
      }
    `}
  `}
`
