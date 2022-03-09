import React from 'react'
import styled from 'styled-components';
import Side from './Side';
import config from '@content/config'

interface EmailProps {
  isHome: boolean;
}

export default function Email(props: EmailProps): JSX.Element {
  return (
    <Side isHome={props.isHome} orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${config.email}`}>{config.email}</a>
      </StyledLinkWrapper>
    </Side>
  )
}

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.textLight};
  }
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;