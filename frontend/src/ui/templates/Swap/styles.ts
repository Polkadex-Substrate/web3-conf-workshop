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
