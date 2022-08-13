import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${theme.colors.primaryBackground};
    box-shadow: ${theme.shadows.primary};
    z-index: 10;
  `}
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
`

export const AsideRight = styled.div`
  display: flex;
  align-items: center;
`

export const SelectAccountContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.text};
    padding: 0.5rem;
    border-radius: 1rem;
    width: 100%;
    max-height: 20rem;
    overflow-y: scroll;
    scrollbar-width: none;
  `}
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
`

export const LoadingContainer = styled.div`
  padding: 3rem 0;
  flex: 1;
`
