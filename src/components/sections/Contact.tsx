import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import mixins from '@styles/mixins';
import srConfig from '@utils/sr';
import config from '@content/config';
import { ContactLocalisation } from 'src/model/Localisation';

interface ContactProps {
  ContactLocale: string
}

const Contact = (props: ContactProps): JSX.Element => {
  const content = JSON.parse(props.ContactLocale) as ContactLocalisation;
  const revealContainer = useRef<HTMLElement>(null);
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

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">{content.h1}</h2>

      <h2 className="title">{content.h2}</h2>

      <p>
        {content.p}
      </p>

      <a className="email-link" href={`mailto:${config.email}`}>
        {content.a}
      </a>
    </StyledContactSection>
  );
};

export default Contact;

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.accent};
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }
    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
  .email-link {
    ${mixins.bigButton};
    margin-top: 50px;
  }
`;
