import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Main = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.sizes.maxBox};
    margin: 0 auto;
  `}
`
export const Container = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.secondary};
    border-radius: 1.4rem;
  `}
`

export const Header = styled.div`
  padding: 1.5rem 1rem;
`

export const HeaderAsideRight = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5rem;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    padding: 3rem;
    border-radius: 2rem;
  `}
`

export const InfoHeader = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 1rem;
    align-items: center;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.secondaryBackground};
    padding: 1.8rem;
    border-radius: 1.2rem;
  `}
`

export const InfoContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;
  `}
`

export const InfoFooter = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
  `}
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export const FooterInfo = styled.div``
