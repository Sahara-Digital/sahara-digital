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
    ${customMedia.between('medium', 'tablet')` 
        padding: 0;
    `}
`;
