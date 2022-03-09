import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import { loaderDelay } from '@utils/loaderDelay';
import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { DefaultStyledComponent } from 'styled-components';

interface SideProps {
    isHome: boolean;
    children: React.ReactChild;
    orientation: SideOrientation;
}

export default function Side(props: SideProps): JSX.Element {
    const isHome = props.isHome;

    const [isMounted, setIsMounted] = useState(!isHome);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (!isHome || prefersReducedMotion) {
            return;
        }
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    });

    return (
        <StyledSideElement orientation={props.orientation}>
            {prefersReducedMotion ? (
                <>{props.children}</>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
                            {props.children}
                        </CSSTransition>
                    )}
                </TransitionGroup>
            )}
        </StyledSideElement>
    );
}

type SideOrientation = 'left' | 'right';

interface StyledSideProps extends DefaultStyledComponent {
    orientation: SideOrientation
}

const StyledSideElement = styled.div<StyledSideProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: ${({ theme }) => theme.colors.textLight};
  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
