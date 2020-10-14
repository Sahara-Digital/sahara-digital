import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MenuLink } from '../';
import { customMedia } from '../../lib/index';

interface IProps {
    open?: any;
}
export const HeaderNavigation = ({ open }: IProps) => {
    return (
        <Container open={open}>
            <MenuLink to={'/'}>Home</MenuLink>
            <MenuLink to={'/about'}>About</MenuLink>
            <MenuLink to={'/services'}>Services</MenuLink>
            <MenuLink to={'/team'}>Team</MenuLink>
            <MenuLink to={'/careers'}>Careers</MenuLink>
            <MenuLink to={'/contact'}>Contact</MenuLink>
        </Container>
    );
};

const Container = styled.div<{ open: any }>`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    ${media.lessThan('small')`
        margin: 0;
        a {
            ${({ theme }) => `font-size:${theme.fontsize.small}`};
        }
        flex-direction: column;
        padding: 0;
        display: none;
    `}

    ${customMedia.between('xxsmall', 'medium')` 
  
     display: none;
    `}
    ${customMedia.between('xxsmall', 'medium')` 
        
    `}
`;
