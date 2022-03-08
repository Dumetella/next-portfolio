import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useRootStore } from '../store/rootStoreProvider';
import { GlobalStyle } from '../styles/global';
import DarkTheme from '../styles/Themes/DarkTheme';
import AppHead from './AppHead';
import Email from './Email';
import Footer from './Footer';
import Menu from './Menu';
import Navigation from './Navigation';
import Social from './Social';

interface LayoutProps {
    children: React.ReactChild;
}

export default function Layout(props: LayoutProps): JSX.Element {
    const store = useRootStore();
    return (
        <>
            <AppHead />
            <ThemeProvider theme={store.darkTheme ? DarkTheme : DarkTheme}>
                <GlobalStyle />
                <div id="root">
                    <StyledContent>
                        <Navigation isHome={false} />
                        <Social />
                        <Email />
                        <div id="content">
                            {props.children}
                        </div>
                        <Footer />
                    </StyledContent>
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

