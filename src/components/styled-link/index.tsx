import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)<{ color?: string }>`
    text-decoration: none;
    font-weight: 500;
    ${({ theme }) => `font-size: ${theme.fontsize.medium}`};
    ${({ theme }) => `font-family: ${theme.fontFamily.Poppins}`};
    ${({ theme, color }) =>
        color
            ? `color: ${theme.colors.black}`
            : `color: ${theme.colors.brand.primary}`};
    &:hover {
        ${({ theme }) => `
         color: ${theme.colors.white}
         border-bottom: 2px solid: ${theme.colors.brand.primary}`};
    }
`;
StyledLink.displayName = 'StyledLink';

export const StyledUnderLineLink = styled(StyledLink)`
    text-decoration: underline;
    ${({ theme }) => ` color: ${theme.colors.brand.primary};`};
`;
StyledUnderLineLink.displayName = 'StyledUnderLineLink';

export const MenuLink = styled(NavLink)`
    ${({ theme }) => css`
        text-decoration: none;
        font-size: ${theme.fontsize.regular};
        font-family: ${theme.fontFamily.Poppins};
        color: ${theme.colors.black};
        padding: 0 0.75em;
        &.active {
            padding-top: 2px;
            ${({ theme }) => css`
                border-bottom: 2px solid ${theme.colors.brand.primary};
            `};
            font-weight: 500;
        }
    `};
    &:hover {
        padding-top: 2px;
        ${({ theme }) =>
            ` border-bottom: 2px solid ${theme.colors.brand.primary};`};
    }
`;
MenuLink.displayName = 'MenuLink';
