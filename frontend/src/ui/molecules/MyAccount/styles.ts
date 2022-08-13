import styled, { css } from 'styled-components'

import { Wrapper as IconWrapper } from 'molecules/Icon/styles'

export const Wrapper = styled.div<{ isHeader: boolean; isFull: boolean }>`
  ${({ theme, isHeader = false, isFull = false }) => css`
    display: flex;
    align-items: center;
    background: ${isHeader ? theme.colors.text : 'transparent'};
    color: ${theme.colors.inverse};
    border-radius: 1rem;
    padding: 0.5rem;
    ${isFull &&
    css`
      flex: 1;
    `}
  `}
`

export const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;
  flex: 1;
  span {
    line-height: 1.1;
  }
`

export const AccountInfoHeader = styled.div`
  margin-right: 1rem;
  p {
    font-weight: 600;
    display: inline-block;
    line-height: 1;
  }
  span {
    display: block;
    font-size: 1.3rem;
  }
`
export const SelectAccountHeader = styled(AccountInfoHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const AccountContent = styled.div<{ isFull?: boolean }>`
  ${({ theme, isFull = false }) => css`
    background: ${theme.colors.text};
    color: ${theme.colors.inverse};
    border-radius: 1rem;
    box-shadow: ${theme.shadows.primary};
    ${isFull &&
    css`
      flex: 1;
    `}
  `}
`

export const AccountContentHeader = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    border-top: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    padding: 1rem;
    margin: 1rem 0;
  `}
`

export const AccountContentInfo = styled.div`
  :first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    span {
      display: block;
      opacity: 0.6;
      font-size: 1.2rem;
      white-space: nowrap;
    }
    a {
      margin-left: 0.2rem;
      display: inline-block;
      opacity: 1;
      transition: opacity 0.5s;
      :hover {
        opacity: 0.6;
      }
    }
    ${IconWrapper} {
      margin-left: 0.5rem;
    }
  }
  :last-child {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    p {
      opacity: 0.6;
      display: inline-block;
    }
    a {
      margin-left: 0.5rem;
      text-decoration: underline;
      cursor: pointer;
      opacity: 1;
      transition: opacity 0.5s;
      :hover {
        opacity: 0.6;
      }
    }
    ${IconWrapper} {
      margin-right: 0.5rem;
    }
  }
`

export const AccountContentSection = styled.div`
  padding: 1rem;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    opacity: 1;
    transition: opacity 0.5s;
    :hover {
      opacity: 0.6;
    }
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`

export const AccountInfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    word-break: break-all;
  }
`

export const AvatarWrapper = styled.div``

export const SelectAccount = styled.div<{
  isHeader?: boolean
  isActive?: boolean
  isFull?: boolean
}>`
  ${({ theme, isHeader, isActive, isFull }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.text};
    color: ${theme.colors.inverse};
    border-radius: 1rem;
    padding: 0.6rem;
    min-width: 25rem;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      background: ${isHeader
        ? `${theme.colors.text}D8`
        : theme.colors.secondaryBackground};
    }
    :not(:last-child) {
      margin-bottom: 1rem;
    }
    ${isActive &&
    css`
      background: ${theme.colors.primaryBackgroundOpacity};
    `}
    ${isFull &&
    css`
      flex: 1;
    `}
  `}
`
