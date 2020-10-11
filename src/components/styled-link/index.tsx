import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0 0.75em;
    font-weight: 300;
    ${({ theme }) => `font-size: ${theme.fontsize.medium}`};
    ${({ theme }) => `color: ${theme.colors.default.tertiary}`};
`;

export const StyledUnderLineLink = styled(StyledLink)`
    text-decoration: underline;
`;

export const SubMenuLink = styled(NavLink)`
    ${({ theme }) => css`
        display: inline-block;
        &.active {
            background: ${theme.colors.brand.secondary};
            font-weight: 700;
        }
    `};
`;
