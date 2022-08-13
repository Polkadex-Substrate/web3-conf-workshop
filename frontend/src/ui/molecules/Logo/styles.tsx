import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 16rem;
  svg {
    pointer-events: none;
  }
`

export const Text = styled.g`
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.1s;
  transition-property: initial;
  opacity: 1;
  @media screen and (max-width: 640px) {
    opacity: 0;
    display: none;
  }
`

export const Icon = styled.g``
