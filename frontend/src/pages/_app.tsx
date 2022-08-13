import { AppProps } from 'next/app'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'

import { selectCurrentColorTheme } from 'modules'
import { defaultThemes } from 'styles'
import { useRangerConnectFetch } from 'hooks'
import GlobalStyles from 'styles/global'
import { wrapper } from 'modules/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeWrapper>
  )
}

const ThemeWrapper = ({ children }) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
  }, [])

  useRangerConnectFetch()
  const color = useSelector(selectCurrentColorTheme)
  const theme = color === 'light' ? defaultThemes.light : defaultThemes.dark

  if (!state) return <div />
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default wrapper.withRedux(App)
