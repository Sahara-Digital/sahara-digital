import React from 'react';
import styled, { css } from 'styled-components';
import { MenuLink } from '..';
import { IProps } from '../../interfaces';
import { customMedia } from '../../lib';
import { navigation } from '../../lib/website-content';

export const Menu: React.FunctionComponent<IProps> = ({ isOpen }: IProps) => {
    return (
        isOpen && (
            <StyledMenu className="styled-menu" isOpen={isOpen}>
                {navigation.map((path: Record<string, any>) => {
                    return (
                        <MenuLink
                            key={path.id}
                            exact={true}
                            to={process.env.PUBLIC_URL + path.to}
                        >
                            {path.name}
                        </MenuLink>
                    );
                })}
            </StyledMenu>
        )
    );
};

const StyledMenu = styled.div<{ isOpen: any }>`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        font-size: ${theme.fontsize.xxlarge};
    `};
    transform: ${({ isOpen }) =>
        isOpen ? 'translateX(0)' : 'translateX(-100%)'};
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
