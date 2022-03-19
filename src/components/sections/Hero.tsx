import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import mixins from '@styles/mixins';
import { loaderDelay, navDelay } from '@utils/loaderDelay';
import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HeroLocalization } from 'src/model/Localization';
import styled from 'styled-components';

interface HeroProps {
    HeroLocale: string
}

export default function Hero(props: HeroProps): JSX.Element {
    const content = JSON.parse(props.HeroLocale) as HeroLocalization;
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();
    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, [prefersReducedMotion]);

    const one = <h1>{content.h1}</h1>;
    const two = <h2 className="big-heading">{content.h2}</h2>;
    const three = <h3 className="big-heading">{content.h3}</h3>;
    const four = (
        <>
            <p>
                {content.p}
            </p>
        </>
    );


    const items = [one, two, three, four];
    return (
        <StyledHeroSection>
            {prefersReducedMotion ? (
                <>
                    {items.map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted &&
                        items.map((item, i) => (
                            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            )}
        </StyledHeroSection>
    )
}

const StyledHeroSection = styled.section`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h1 {
    margin: 0 0 30px 4px;
    color: ${({ theme }) => theme.colors.accent};
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.textNormal};
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
  .email-link {
    ${mixins.bigButton};
    margin-top: 50px;
  }
`;