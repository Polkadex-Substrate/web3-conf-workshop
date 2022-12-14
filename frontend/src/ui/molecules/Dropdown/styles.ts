import styled, { css } from 'styled-components'

const directionModifier = {
  top: () => css`
    bottom: calc(100%);
    left: 0;
  `,
  topRight: () => css`
    bottom: calc(100%);
    right: 0;
  `,
  bottom: () => css`
    top: calc(100%);
    left: 0;
  `,
  bottomRight: () => css`
    top: calc(100%);
    right: 0;
  `,
  right: () => css`
    bottom: 50%;
    transform: translateY(50%);
    right: calc(100%);
  `,
  left: () => css`
    top: 50%;
    transform: translateY(-50%);
    left: calc(100%);
  `,
  centerLeft: () => css`
    top: 0;
    left: 0;
  `,
  centerRight: () => css`
    top: 0;
    right: 0;
  `
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

const priorityModifiers = {
  low: () => css`
    ${Header} {
      z-index: 31;
    }
    ${Content} {
      z-index: 31;
    }
    ${Overlay} {
      z-index: 30;
    }
  `,
  medium: () => css`
    ${Header} {
      z-index: 32;
    }
    ${Content} {
      z-index: 32;
    }
    ${Overlay} {
      z-index: 31;
    }
  `,
  high: () => css`
    ${Header} {
      z-index: 33;
    }
    ${Content} {
      z-index: 33;
    }
    ${Overlay} {
      z-index: 32;
    }
  `
}

export const Header = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
  `}
`

export const Content = styled.div<{ direction?: string; isFull?: boolean }>`
  ${({ theme, isFull = true, direction = 'bottom' }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: ${isFull ? '100%' : 'max-content'};
    ${directionModifier[direction]()};
  `}
`

export const Overlay = styled.div<{ isOpacity: boolean }>`
  ${({ theme, isOpacity }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${isOpacity ? theme.colors.overlayOpacity : 'none'};
    transition: opacity 0.5s ease-in-out;
  `}
`

export const Wrapper = styled.div<{ isOpen: boolean; priority: string }>`
  ${({ theme, isOpen, priority = 'low' }) => css`
    position: relative;
    ${priorityModifiers[priority]};
    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
