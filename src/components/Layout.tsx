import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useRootStore } from '@store/rootStoreProvider';
import { GlobalStyle } from '@styles/global';
import DarkTheme from '@styles/Themes/DarkTheme';
import AppHead from '@components/AppHead';
import Email from '@components/Email';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import Social from '@components/Social';

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

