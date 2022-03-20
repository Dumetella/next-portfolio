import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import Icon from '@components/icons/Icon';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import Link from 'next/link';
import srConfig from '@utils/sr';
import mixins from '@styles/mixins';

interface ArchiveProjectsProps {
    ArchiveProjectsLocale?: string,
    ArchiveProjectsContent: string,
}

const ArchiveProjects = (props: ArchiveProjectsProps): JSX.Element => {

    // const localization = JSON.parse(props.ArchiveProjectsLocale);
    const content = JSON.parse(props.ArchiveProjectsContent);

    const [showMore, setShowMore] = useState(false);
    const revealTitle = useRef<HTMLHeadingElement>(null);
    const revealArchiveLink = useRef<HTMLAnchorElement>(null);
    const revealProjects = useRef<HTMLLIElement[]>([]);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }
        async function reveal() {
            const sr = (await import("scrollreveal")).default;
            if (revealTitle.current) {
                sr.reveal(revealTitle.current, srConfig());
            }
            if (revealArchiveLink.current) {
                sr.reveal(revealArchiveLink.current, srConfig());
            }
            revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
        }
        reveal();
    }, [prefersReducedMotion]);

    const GRID_LIMIT = 6;
    const firstSix = content.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? content : firstSix;

    const projectInner = (node: any): JSX.Element => {

        return (
            <div className="project-inner">
                <header>
                    <div className="project-top">
                        <div className="folder">
                            <Icon name="Folder" />
                        </div>
                        <div className="project-links">
                            {node.github && (
                                <a href={node.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                                    <Icon name="GitHub" />
                                </a>
                            )}
                            {node.external && (
                                <a
                                    href={node.external}
                                    aria-label="External Link"
                                    className="external"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Icon name="External" />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="project-title">
                        <a href={node.external} target="_blank" rel="noreferrer">
                            {node.title}
                        </a>
                    </h3>

                    <div className="project-description" dangerouslySetInnerHTML={{ __html: node.content }} />
                </header>

                <footer>
                    {node.tech && (
                        <ul className="project-tech-list">
                            {node.tech.map((tech: string, i: number) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    )}
                </footer>
            </div>
        );
    };

    return (
        <StyledProjectsSection>
            <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

            <Link href="/archive" >
                <a className="inline-link archive-link" ref={revealArchiveLink}>
                    view the archive
                </a>
            </Link>

            <ul className="projects-grid">
                {prefersReducedMotion ? (
                    <>
                        {projectsToShow &&
                            projectsToShow.map((node: any, i: number) => (
                                <StyledProject key={i}>{projectInner(node)}</StyledProject>
                            ))}
                    </>
                ) : (
                    <TransitionGroup component={null}>
                        {projectsToShow &&
                            projectsToShow.map((node: any, i: number) => (
                                <CSSTransition
                                    key={i}
                                    classNames="fadeup"
                                    timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                                    exit={false}>
                                    <StyledProject
                                        key={i}
                                        ref={el => (revealProjects.current[i] = el as HTMLLIElement)}
                                        style={{
                                            transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                                        }}>
                                        {projectInner(node)}
                                    </StyledProject>
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                )}
            </ul>

            <button className="more-button" onClick={() => setShowMore(!showMore)}>
                Show {showMore ? 'Less' : 'More'}
            </button>
        </StyledProjectsSection>
    );
};

export default ArchiveProjects;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }
  .projects-grid {
    ${mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  .more-button {
    ${mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);
  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }
  a {
    position: relative;
    z-index: 1;
  }
  .project-inner {
    ${mixins.boxShadow};
    ${mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    transition: var(--transition);
  }
  .project-top {
    ${mixins.flexBetween};
    margin-bottom: 35px;
    .folder {
      color: ${({ theme }) => theme.colors.accent};
      svg {
        width: 40px;
        height: 40px;
      }
    }
    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: ${({ theme }) => theme.colors.textLight};
      a {
        ${mixins.flexCenter};
        padding: 5px 7px;
        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .project-title {
    margin: 0 0 10px;
    color: ${({ theme }) => theme.colors.textBright};
    font-size: var(--fz-xxl);
    a {
      position: static;
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  .project-description {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 17px;
    a {
      ${mixins.inlineLink};
    }
  }
  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;