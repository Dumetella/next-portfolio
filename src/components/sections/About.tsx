import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import srConfig from '@utils/sr';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import Image from 'next/image';
import mixins from '@styles/mixins';
import { AboutLocalization } from 'src/model/Localization';

interface AboutProps {
  AboutLocale: string
}

const About = (props: AboutProps): JSX.Element => {
  const content = JSON.parse(props.AboutLocale) as AboutLocalization;
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    async function reveal() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(revealContainer.current, srConfig());
      }
    };
    reveal()
  }, [prefersReducedMotion])

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'MobX'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">{content.h2}</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p4}</p>
          </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src="/images/me.jpg"
              width={500}
              height={600}
              quality={95}
              alt="Hi"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.accent};
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.colors.accent};
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.backgroundNormal};
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid ${({ theme }) => theme.colors.accent};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;