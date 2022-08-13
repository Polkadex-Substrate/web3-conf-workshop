import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.secondary};
    border-radius: 1.5rem;
  `}
`
