import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import * as T from './types'

import {
  changeColorTheme,
  selectCurrentDarkTheme,
  selectRangerIsConnected,
  selectRangerIsConnecting
} from 'modules'
import { SystemStatus, ThemeSwitch, Menu } from 'molecules'

export const Footer = ({ isVisible = true }: T.Props) => {
  const dispatch = useDispatch()
  const rangerIsConnecting = useSelector(selectRangerIsConnecting)
  const rangerIsConnected = useSelector(selectRangerIsConnected)
  const isDarkTheme = useSelector(selectCurrentDarkTheme)

  const [state, setState] = useState({
    prevScrollpos: process.browser && window.pageYOffset,
    visible: true
  })

  useEffect(() => {
    const handleScroll = () => {
      const { prevScrollpos } = state
      const currentScrollpos = process.browser && window.pageYOffset
      const visible = prevScrollpos >= currentScrollpos
      setState({ prevScrollpos: currentScrollpos, visible })
    }
    process.browser && window.addEventListener('scroll', handleScroll)
    return () => {
      process.browser && window.removeEventListener('scroll', handleScroll)
    }
  }, [state])

  return (
    <S.Wrapper isVisible={state.visible}>
      <S.Container>
        <S.Card>
          <ThemeSwitch
            onChangeLight={() => dispatch(changeColorTheme('light'))}
            onChangeDark={() => dispatch(changeColorTheme('dark'))}
            isDark={isDarkTheme}
          />
        </S.Card>
        <S.Card>
          {isVisible && (
            <Menu
              menuLinks={[
               
              ]}
            />
          )}
        </S.Card>
        <S.Card>
          <SystemStatus
            isActive={rangerIsConnected}
            isLoading={rangerIsConnecting}
          />
        </S.Card>
      </S.Container>
    </S.Wrapper>
  )
}
