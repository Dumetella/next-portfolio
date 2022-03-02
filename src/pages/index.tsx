import type { NextPage } from 'next'
import styled, { ThemeProvider } from 'styled-components'
import { useRootStore } from '../store/rootStoreProvider'
import { GlobalStyle } from '../styles/global';

const Home: NextPage = () => {

  const store = useRootStore();

  return (
    <>
      <ThemeProvider theme={store.currentTheme}>
        <GlobalStyle />
        <Biboba>AAAAAAAAAAA</Biboba>
      </ThemeProvider>
    </>
  )
}

export default Home

const Biboba = styled.div`
  color: ${(props) => props.theme.colors.accent};
  border: 1px solid;
  border-color: var(--slate);
`
