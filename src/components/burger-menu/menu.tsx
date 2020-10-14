import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MenuLink } from '..';
import { IProps } from '../../interfaces';

export const Menu = ({ open }: IProps) => {
    return (
        open && (
            <StyledMenu open={open}>
                <MenuLink to={'/'}>Home</MenuLink>
                <MenuLink to={'/about'}>About</MenuLink>
                <MenuLink to={'/services'}>Services</MenuLink>
                <MenuLink to={'/team'}>Team</MenuLink>
                <MenuLink to={'/careers'}>Careers</MenuLink>
                <MenuLink to={'/contact'}>Contact</MenuLink>
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
      padding: 1.5rem 0;
  }
`}
    ${media.lessThan('medium')`
  a {
      ${({ theme }) => `font-size:${theme.fontsize.regular}`};
      text-align: center;
      padding: 1.5rem 0;
  }
`}

  @media (max-width: 576px) {
        width: 100%;
    }

    ${media.greaterThan('huge')`
    a {
        ${({ theme }) => `font-size:${theme.fontsize.regular}`};
        text-align: center;
        padding: 1.5rem 0;
        display: none;
    }
  `}
`;

// a {
//   font-size: 2rem;
//   padding: 2rem 0;
//   font-weight: bold;
//   letter-spacing: 0.5rem;
//   color: black;
//   text-decoration: none;
//   flex-direction: row;
//   transition: color 0.3s linear;

//   // @media (max-width: 576px) {
//   //   font-size: 1.5rem;
//   //   text-align: center;
//   // }

//   &:hover {
//     color: #343078;
//   }
// }
