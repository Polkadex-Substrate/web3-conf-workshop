import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    background: ${theme.colors.text};
    border-radius: 0.8rem;
    padding: 0.7rem;
  `}
`
export const Card = styled.li<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    display: inline-block;
    font-weight: 500;
    opacity: 1;
    transition: opacity 0.5s;
    padding: 0.5rem;
    vertical-align: middle;
    color: ${theme.colors.inverse};

    :hover {
      opacity: 0.6;
    }
    :not(:last-child) {
      margin-right: 1.2rem;
    }

    a {
      cursor: pointer;
    }

    ${isActive &&
    css`
      background: ${theme.colors.primary};
      border-radius: 0.5rem;
      color: white;
    `}
  `}
`
