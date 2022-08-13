import styled, { css } from 'styled-components'

import { Wrapper as IconWrapper } from 'molecules/Icon/styles'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    ${IconWrapper} {
      opacity: 1;
      transition: all 0.5s;
      :first-child {
        margin-right: 0.5rem;
      }
      :last-child {
        margin-left: 0.5rem;
      }
    }

    :hover ${IconWrapper} {
      :first-child {
        background: ${theme.colors.primary};
        border-radius: 0.3rem;
      }
      :last-child {
        opacity: 0.5;
        transform: translateX(0.3rem);
      }
    }
  `}
`
