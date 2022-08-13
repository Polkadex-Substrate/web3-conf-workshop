import styled, { css } from 'styled-components'

export const Wrapper = styled.footer<{ isVisible: boolean }>`
  position: fixed;
  ${({ theme, isVisible }) => css`
    left: 0%;
    bottom: ${isVisible ? 0 : '-8rem'};
    width: 100%;
    z-index: 5;
    padding: 0.5rem 1rem;
    background-color: ${theme.colors.primaryBackground};
    box-shadow: ${theme.shadows.primary};
    transition: bottom 0.6s;
  `}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  margin: 0 auto;
`

export const Card = styled.div`
  :first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  :last-child {
    display: block;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`
export const CardWrapper = styled.div`
  margin-left: 1rem;
`
