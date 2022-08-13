import styled, { css } from 'styled-components'

import { Container as WrapperIcon } from 'molecules/Icon/styles'
export const Wrapper = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    background: ${isActive ? `${theme.colors.primary}CC` : theme.colors.white};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    :hover {
      background: ${theme.colors.secondaryBackground};
    }
    ${isActive &&
    css`
      ${WrapperIcon} {
        background: ${theme.colors.primaryBackground};
      }
    `}
    span {
      display: block;
      font-size: 1.4rem;
    }
    p {
      opacity: 0.7;
      font-weight: 500;
    }
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-left: 0.5rem;
    span {
      font-weight: 550;
    }
  `}
`
export const Price = styled.div`
  ${({ theme }) => css`
    text-align: right;
  `}
`
