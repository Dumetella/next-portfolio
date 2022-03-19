import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@utils/sr';
import Icon from '@components/icons/Icon';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import mixins from '@styles/mixins';
import Image from 'next/image';
import { FeaturedLocalization } from 'src/model/Localization';

interface FeaturedProps {
  FeaturedLocale: string,
  FeaturedProjects: string
}

const Featured = (props: FeaturedProps) => {
  const contentLocale: FeaturedLocalization = JSON.parse(props.FeaturedLocale);
  const featuredProjects = JSON.parse(props.FeaturedProjects);
  const revealTitle = useRef<HTMLHeadingElement>(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    async function reveal() {
      const sr = (await import("scrollreveal")).default;
      if (revealTitle.current) {
        sr.reveal(revealTitle.current, srConfig());
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
      }
    }
    reveal();
  }, [prefersReducedMotion]);

  return (
    <section id="projects">
      <h2 className="numbered-heading" >
        {contentLocale.h2}
      </h2>
      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map((node: any, i: number) => {
            return (
              <StyledProject key={i}>
                <div className="project-content">
                  <div>
                    <p className="project-overline">{contentLocale.p}</p>

                    <h3 className="project-title">
                      <a href={node.external ? node.external : node.github}>{node.title}</a>
                    </h3>

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: node.content }}
                    />

                    {node.tech.length && (
                      <ul className="project-tech-list">
                        {node.tech.map((tech: string, i: number) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {node.cta && (
                        <a href={node.cta} aria-label="Course Link" className="cta">
                          Learn More
                        </a>
                      )}
                      {node.github && (
                        <a href={node.github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {node.external && !node.cta && (
                        <a href={node.external} aria-label="External Link" className="external">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={node.external ? node.external : node.github ? node.github : '#'}>
                    <Image src={node.cover} alt={node.title} layout="fill" className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;

const StyledProjectsGrid = styled.ul`
  ${mixins.resetList};
  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 768px) {
    ${mixins.boxShadow};
  }
  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-overline {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.accent};
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }
  .project-title {
    color: ${({ theme }) => theme.colors.textBright};
    font-size: clamp(24px, 5vw, 28px);
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      color: ${({ theme }) => theme.colors.white};
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
  }
  .project-description {
    ${mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.textLight};
    font-size: var(--fz-lg);
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    a {
      ${mixins.inlineLink};
    }
    strong {
      color: ${({ theme }) => theme.colors.white};
      font-weight: normal;
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: ${({ theme }) => theme.colors.textLight};
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: ${({ theme }) => theme.colors.textBright};
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${({ theme }) => theme.colors.textBright};
    a {
      ${mixins.flexCenter};
      padding: 10px;
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
    .cta {
      ${mixins.smallButton};
      margin: 10px;
    }
  }
  .project-image {
    ${mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    height: 100%;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: var(--border-radius);
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: ${({ theme }) => theme.colors.backgroundNormal};
        mix-blend-mode: screen;
      }
    }
    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;