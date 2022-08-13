import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Main = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.sizes.maxBox};
    margin: 0 auto;
    z-index: 1;
    flex: 1;
  `}
`

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 1rem;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.secondary};
    border-radius: 1.4rem;
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  @media screen and (min-width: 450px) {
    flex-direction: row;
    align-items: center;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  `}
`

export const Aside = styled.div`
  ${({ theme }) => css``}
`

export const Search = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.black};
      display: block;
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }
  `}
`

export const Tokens = styled.div`
  ${({ theme }) => css`
    margin: 1rem 0;
  `}
`
