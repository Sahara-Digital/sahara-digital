import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)<{ color?: string }>`
    text-decoration: none;
    font-weight: 500;
    ${({ theme }) => `font-size: ${theme.fontsize.medium}`};
    ${({ theme }) => `font-family: ${theme.fontFamily.Poppins}`};
    ${({ theme, color }) =>
        color ? `color: ${theme.colors.black}` : `color: #9ccc;`};
    &:hover {
        padding-top: 2px;
        color: white;
        border-bottom: 2px solid #9ccccc;
    }
`;

export const StyledUnderLineLink = styled(StyledLink)`
    text-decoration: underline;
    color: #9ccc;
`;

export const MenuLink = styled(NavLink)`
    ${({ theme }) => css`
        text-decoration: none;
        font-size: ${theme.fontsize.regular};
        font-family: ${theme.fontFamily.Poppins};
        color: ${theme.colors.black};
        padding: 0 0.75em;
        font-weight: 500;
        &.active {
            padding-top: 2px;
            border-bottom: 2px solid #9ccccc;
            font-weight: 700;
        }
    `};
    &:hover {
        padding-top: 2px;
        border-bottom: 2px solid #9ccccc;
        width: fit-content;
    }
`;
