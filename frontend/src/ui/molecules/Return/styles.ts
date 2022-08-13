import styled, { css } from 'styled-components'

import { Wrapper as IconWrapper } from 'molecules/Icon/styles'

export const Wrapper = styled.div<{ isBack?: boolean }>`
  ${({ isBack }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    ${IconWrapper} {
      opacity: 1;
      transition: transform 0.2s, opacity 0.2s;
      margin: 0 ${!isBack ? '0.5rem' : 0} 0 ${isBack ? '0.5rem' : 0};
      transform: ${isBack ? 'rotate(180deg)' : 'rotate(0deg)'};} 
    }
    :hover {
      ${IconWrapper} {
        opacity: 0.5;
      }

      ${
        !isBack &&
        css`
          ${IconWrapper} {
            transform: translateX(0.3rem) scale(0.9);
          }
        `
      }
    }
  `}
`
