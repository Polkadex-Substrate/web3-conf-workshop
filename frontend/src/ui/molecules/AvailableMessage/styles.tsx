import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ isFull?: boolean }>`
  ${({ isFull }) => css`
    position: relative;
    ${isFull &&
    css`
      flex: 1;
    `}
  `}
`

export const Container = styled.div<{ background: string }>`
  ${({ theme, background = 'secondaryBackgroundSolid' }) => css`
    position: absolute;
    top: 0;
    background-color: ${theme.colors[background]};
    padding: 1rem;
    color: ${theme.colors.text};
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      opacity: 1;
    }
    p {
      font-weight: 600;
      display: inline-block;
    }
  `}
`
