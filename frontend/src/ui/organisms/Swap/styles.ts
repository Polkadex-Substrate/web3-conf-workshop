import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-bottom: 5.5rem;
  `}
`
export const Container = styled.section`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;
    padding: 1rem;
    background-color: ${theme.colors.text};
    box-shadow: ${theme.shadows.tertiary};
    border-radius: 1.5rem;
  `}
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem 1.5em;

  @media screen and (min-width: 450px) {
    flex-direction: row;
    align-items: center;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  align-items: center;
  grid-gap: 1rem;
  margin: 1.5rem 0;
`
export const Footer = styled.div`
  padding: 0rem 1.5rem 1rem 1.5rem;
`

export const TransactionContainer = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    transition: margin 0.5s;
    margin-top: ${isActive ? '-1rem' : '-10rem'};
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    border-radius: 0 0 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 1rem;
  `}
`
