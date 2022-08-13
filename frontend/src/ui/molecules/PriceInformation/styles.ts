import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ color?: string }>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    p {
      margin-left: 0.5rem;
      color: ${theme.colors[color]};
      display: inline-block;
    }
    strong {
      font-weight: 600;
    }
  `}
`
