import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useRootStore } from '@store/rootStoreProvider';
import { GlobalStyle } from '@styles/global';
import DarkTheme from '@styles/Themes/DarkTheme';
import AppHead from '@components/AppHead';
import Email from '@components/Email';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import Social from '@components/Social';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: React.ReactChild;
    NavigationLocale: string,
}

export default function Layout(props: LayoutProps): JSX.Element {

    const store = useRootStore();
    const isHome = useRouter().pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    return (
        <>
            <AppHead />
            <ThemeProvider theme={store.darkTheme ? DarkTheme : DarkTheme}>
                <GlobalStyle />
                <div id="root">
                    <StyledContent>
                        <Navigation isHome={isHome} NavigationLocale={props.NavigationLocale} />
                        <Social isHome={isHome} />
                        <Email isHome={isHome} />
                        <div id="content">
                            {props.children}
                        </div>
                        {/* <Footer /> */}
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

