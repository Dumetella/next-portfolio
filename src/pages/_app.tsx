import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { RootStoreProvider } from '../store/rootStoreProvider'
import { GlobalStyle } from '../styles/global'
import DarkTheme from '../styles/Themes/DarkTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootStoreProvider>
        <ThemeProvider theme={DarkTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RootStoreProvider>
    </>
  )
}

export default MyApp
