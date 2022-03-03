import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useRootStore } from '../store/rootStoreProvider';
import { GlobalStyle } from '../styles/global';
import AppHead from './AppHead';

interface LayoutProps {
    children: React.ReactChild;
}

export default function Layout(props: LayoutProps): JSX.Element {
    const store = useRootStore();
    return (
        <>
            <AppHead />
            <ThemeProvider theme={store.currentTheme}>
                <GlobalStyle />
                <div id="root">
                    {props.children}
                </div>
            </ThemeProvider>
        </>
    )
}


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

