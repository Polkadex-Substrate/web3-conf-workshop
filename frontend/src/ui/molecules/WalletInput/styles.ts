import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
    border-radius: 0.5rem;
    background-color: ${theme.colors.inverse};
    box-shadow: ${theme.shadows.tertiary};
    input {
      width: 100%;
      background: none;
      border: none;
      color: ${theme.colors.text};
    }
    button {
      background: ${theme.colors.text};
      font-size: 1.1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      margin-left: 0.5rem;
      font-weight: 500;
    }
  `}
`
