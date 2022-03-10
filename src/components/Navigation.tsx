import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css, DefaultStyledComponent } from 'styled-components';
import navLinks from '@en/navlinks';
import { loaderDelay } from '@utils/loaderDelay';
import useScrollDirection from '@hooks/useScrollDirection';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import mixins from '@styles/mixins';
import Link from 'next/link';
import Menu from '@components/Menu';

interface NavigationProps {
  isHome: boolean;
}

const Navigation = (props: NavigationProps): JSX.Element => {
  let isHome = props.isHome;
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const Logo = (): JSX.Element => (
    <div className="logo" tabIndex={-1}>
      {isHome ? (
        <Link href="/" aria-label="home">
          <a>
            {/* <IconLogo /> */}
            Aboba
          </a>
        </Link>
      ) : (
        <Link href="/" aria-label="home">
          <a>
            {/* <IconLogo /> */}
            Aboba
          </a>
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  type scrollDirection = 'up' | 'down';
  return (
    <StyledHeader scrollDirection={scrollDirection as scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            <Logo />

            <StyledLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link href={url}>{name}</Link>
                    </li>
                  ))}
              </ol>
              {/* <div>{ResumeLink}</div> */}
            </StyledLinks>

            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Logo />
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                          <Link href={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              {/* <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup> */}
            </StyledLinks>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Navigation;

interface StyledHeaderProps extends DefaultStyledComponent {
  scrollDirection: 'up' | 'down';
  scrolledToTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px ${({ theme }) => theme.colors.shadow};;
      `};
    ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px ${({ theme }) => theme.colors.shadow};
      `};
  }
`;

const StyledNav = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.textBright};
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
  .logo {
    ${mixins.flexCenter};
    a {
      color: ${({ theme }) => theme.colors.accent};
      width: 42px;
      height: 42px;
      &:hover,
      &:focus {
        svg {
          fill: ${({ theme }) => theme.colors.accent2};
        }
      }
      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    ${mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.accent};
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
  .resume-button {
    ${mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;