import React from 'react';
import styled, { css } from 'styled-components';
import { MenuLink } from '..';
import { IProps } from '../../interfaces';
import { customMedia } from '../../lib';

export const Menu = ({ open }: IProps) => {
    return (
        open && (
            <StyledMenu className="styled-menu" open={open}>
                <MenuLink className="styled-menu-home" exact={true} to={'/'}>
                    Home
                </MenuLink>
                <MenuLink
                    className="styled-menu-about"
                    exact={true}
                    to={'/about'}
                >
                    About
                </MenuLink>
                <MenuLink
                    className="styled-menu-services"
                    exact={true}
                    to={'/services'}
                >
                    Services
                </MenuLink>
                <MenuLink
                    className="styled-menu-team"
                    exact={true}
                    to={'/team'}
                >
                    Team
                </MenuLink>
                <MenuLink
                    className="styled-menu-careers"
                    exact={true}
                    to={'/careers'}
                >
                    Careers
                </MenuLink>
                <MenuLink
                    className="styled-menu-contact"
                    exact={true}
                    to={'/contact'}
                >
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
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        font-size: ${theme.fontsize.xxlarge};
    `};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    height: 100vh;
    text-align: left;
    padding: 5rem 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    ${customMedia.lessThan('medium')` 
        align-items: center;
        width: 100%;
        height: 100vh;
        a {
        ${({ theme }) => `font-size:${theme.fontsize.large}`};
        text-align: center;
        margin-bottom: 1rem;
        max-width: fit-content;
        
    }
    `}
    ${customMedia.greaterThan('medium')` 
        flex-direction: row;
        width: 100%;
        a {
        ${({ theme }) => `font-size:${theme.fontsize.large}`};
        text-align: center;
        margin-bottom: 1rem;
        max-width: fit-content;
        
    }
    `}
`;

StyledMenu.displayName = 'StyledMenu';
