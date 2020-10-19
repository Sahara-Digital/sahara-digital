import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MenuLink } from '..';
import { IProps } from '../../interfaces';

export const Menu = ({ open }: IProps) => {
    return (
        open && (
            <StyledMenu open={open}>
                <MenuLink exact={true} to={'/'}>
                    Home
                </MenuLink>
                <MenuLink exact={true} to={'/about'}>
                    About
                </MenuLink>
                <MenuLink exact={true} to={'/services'}>
                    Services
                </MenuLink>
                <MenuLink exact={true} to={'/team'}>
                    Team
                </MenuLink>
                <MenuLink exact={true} to={'/careers'}>
                    Careers
                </MenuLink>
                <MenuLink exact={true} to={'/contact'}>
                    Contact
                </MenuLink>
            </StyledMenu>
        )
    );
};

const StyledMenu = styled.div<{ open: any }>`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    height: 100vh;
    text-align: left;
    padding: 5rem 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    ${media.lessThan('small')`
  a {
      ${({ theme }) => `font-size:${theme.fontsize.regular}`};
      text-align: center;
      margin-bottom: 1.5rem;
  }
`}
    ${media.lessThan('medium')`
  a {
      ${({ theme }) => `font-size:${theme.fontsize.regular}`};
      text-align: center;
      margin-bottom: 1.5rem;
  }
`}

${media.greaterThan('medium')`
    display: none
`}

  @media (max-width: 576px) {
        width: 100%;
    }
    ${media.greaterThan('huge')`
        display: none;
  `}
`;
