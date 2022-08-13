import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ isFull?: boolean }>`
  ${({ isFull }) => css`
    min-width: 30rem;

    ${isFull &&
    css`
      flex: 1;
    `}
  `}
`
export const Label = styled.span`
  ${({ theme }) => css`
    margin-left: 1.5rem;
    color: ${theme.colors.inverse};
  `}
`

export const Container = styled.div<{ background?: string }>`
  ${({ theme, background = 'primaryBackground' }) => css`
    margin-top: 1rem;
    background-color: ${theme.colors[background]};
    border-radius: 1.4rem;
    box-shadow: ${theme.shadows.tertiary};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    min-width: 22rem;
    padding: 1.5rem;
    border-radius: 1.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    :hover {
      background: ${theme.colors.secondaryBackgroundOpacity};
      box-shadow: ${theme.shadows.secondary};
    }
  `}
`

export const HeaderAside = styled.div`
  :first-child {
    display: flex;
    align-items: center;
  }
  :last-child {
    align-self: flex-end;
  }
`
export const HeaderInfo = styled.div`
  margin-left: 1rem;

  p {
    font-size: 1.6rem;
    font-weight: 550;
    line-height: 1.5;
  }
  span {
    font-size: 1.3rem;
    opacity: 0.7;
  }
`

export const Content = styled.div`
  margin-top: 1.4rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
`

export const Aside = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :last-child {
    margin-top: 0.5rem;
    span,
    p {
      opacity: 0.6;
      font-size: 1.3rem;
    }
    span {
      display: block;
    }
    p {
      margin-right: 0.5rem;
    }
  }
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
  p {
    opacity: 0.6;
    font-size: 1.2rem;
  }
  span {
    display: block;
    opacity: 0.6;
    margin-right: 0.5;
    font-size: 1.2rem;
  }
`

export const Converted = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: 1.3rem;
    span {
      background-color: ${theme.colors.secondaryBackground};
      padding: 0.5rem;
      border-radius: 0.5rem;
      font-weight: 500;
      font-size: 1.1rem;
    }
  `}
`
