import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ isLeft?: boolean }>`
  ${({ theme, isLeft = false }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${isLeft ? 'flex-start' : 'flex-end'};
    text-align: ${isLeft ? 'left' : 'right'};
    color: ${theme.colors.black};
    span {
      display: block;
    }
  `}
`
export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  p {
    font-size: 2rem;
    font-weight: 500;
  }
  small {
    font-size: 1.1rem;
    opacity: 0.7;
  }
`
