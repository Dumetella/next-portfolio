import Coffee from '@components/Coffee/Coffee'
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion'
import mixins from '@styles/mixins'
import { navDelay } from '@utils/loaderDelay'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import Layout from '../components/Layout'

interface Custom404Props {
    NavigationLocale: string,
    Custom404Locale: string
}




export default function Custom404(props: Custom404Props): JSX.Element {

    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, [prefersReducedMotion]);

    const content = (
        <StyledMainContainer className="fillHeight">
            <StyledTitle>404</StyledTitle>
            <StyledSubtitle>Page Not Found</StyledSubtitle>
            <StyledHomeButton href="/">Go Home</StyledHomeButton>
        </StyledMainContainer>
    );

    return (
        <Layout NavigationLocale={props.NavigationLocale}>
            {prefersReducedMotion ? (
                <>{content}</>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition timeout={500} classNames="fadeup">
                            {content}
                        </CSSTransition>
                    )}
                </TransitionGroup>
            )}
        </Layout>
    )
};


export const getStaticProps: GetStaticProps = async ({ locale }): Promise<GetStaticPropsResult<Custom404Props>> => {
    const loc = locale === 'ru' ? 'ru' : 'en';
    const NavigationLocale = await import(`../../content/${loc}/localization/navlinks.json`);
    return {
        props: {
            NavigationLocale: JSON.stringify(NavigationLocale),
            Custom404Locale: 'aboba'
        },
    };
};

const StyledMainContainer = styled.main`
  ${mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;
