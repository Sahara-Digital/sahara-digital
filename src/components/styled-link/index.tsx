import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 0 0.75em;
    font-weight: 500;
    ${({ theme }) => `font-size: ${theme.fontsize.medium}`};
    ${({ theme }) => `font-family: ${theme.fontFamily.Poppins}`};
    ${({ theme }) => `color: ${theme.colors.black}`};
`;

export const StyledUnderLineLink = styled(StyledLink)`
    text-decoration: underline;
`;

export const MenuLink = styled(NavLink)`
    ${({ theme }) => css`
        text-decoration: none;
        font-size: ${theme.fontsize.medium};
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
    }
`;
