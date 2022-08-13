import styled, { css } from 'styled-components'

import { Wrapper as IconWrapper } from 'molecules/Icon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 2%;
    right: 1%;
    background: ${theme.colors.secondaryBackgroundSolid};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    max-width: 32rem;
    width: 100%;
    ${IconWrapper} {
      transition: opacity 0.8s;
      opacity: 1;
      :hover {
        opacity: 0.5;
      }
    }
  `}
`

export const Aside = styled.div`
  margin-right: 5rem;
  text-transform: capitalize;
  span {
    font-size: 1.5rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.5rem;
  }
  p {
    word-break: break-all;
  }
`
