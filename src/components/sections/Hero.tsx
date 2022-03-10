import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import mixins from '@styles/mixins';
import { loaderDelay, navDelay } from '@utils/loaderDelay';
import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

export default function Hero(): JSX.Element {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();
    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    });

    const one = <h1>{'lorem'}</h1>;
    const two = <h2 className="big-heading">{'ipsum'}</h2>;
    const three = <h3 className="big-heading">{'abobus'}</h3>;
    const four = (
        <>
            <p>
                {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel veniam dolorum, quae maxime ducimus earum alias sunt blanditiis veritatis, quo dolor mollitia doloribus iste? Quo similique nisi nam perferendis!'}
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