import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{
  isHorizontal?: boolean
  hasTooltip?: boolean
  spaceBetween?: boolean
}>`
  ${({ isHorizontal, hasTooltip, spaceBetween }) => css`
    display: flex;
    flex-direction: ${isHorizontal ? 'row' : 'column'};
    justify-content: ${spaceBetween && isHorizontal
      ? 'space-between'
      : 'flex-start'};
    align-items: ${isHorizontal ? 'center' : 'flex-start'};
    margin: 0;
    p {
      font-size: 1.2rem;
      margin-left: ${hasTooltip ? '0.5rem' : 0};
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: ${theme.colors.white};
    }
  `}
`
export const Container = styled.div<{
  isHorizontal?: boolean
  spaceBetween?: boolean
}>`
  ${({ isHorizontal, spaceBetween }) => css`
    ${isHorizontal &&
    !spaceBetween &&
    css`
      margin-left: 0.5rem;
    `}
  `}
`
