import type { AppProps } from 'next/app'
import { RootStoreProvider } from '../store/rootStoreProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootStoreProvider>
        <Component {...pageProps} />
      </RootStoreProvider>
    </>
  )
}

export default MyApp
