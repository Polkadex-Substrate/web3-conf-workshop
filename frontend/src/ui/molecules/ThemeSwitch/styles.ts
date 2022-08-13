import styled, { css } from 'styled-components'

import { Wrapper as IconWrapper } from 'molecules/Icon/styles'

export const Wrapper = styled.div<{ isActive?: boolean }>`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    padding: 0.4rem;
    ${IconWrapper} {
      cursor: pointer;
      hover: {
        background: ${theme.colors.secondaryBackground};
      }
    }
  `}
`
