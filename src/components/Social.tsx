import React from 'react'
import styled from 'styled-components';
import Side from './Side';
import config from '@content/config'
import Icon from './icons/Icon';

interface SocialProps {
    isHome: boolean;
}

export default function Social(props: SocialProps): JSX.Element {
    return (
        <Side isHome={props.isHome} orientation="left">
            <StyledSocialList>
                {config.socialMedia &&
                    config.socialMedia.map(({ url, name }, i) => (
                        <li key={i}>
                            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                                <Icon name={name} />
                            </a>
                        </li>
                    ))}
            </StyledSocialList>
        </Side>
    )
}


const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.textLight};
  }
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;