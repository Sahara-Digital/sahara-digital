import React from 'react';
import styled from 'styled-components';
import { Router } from 'react-router-dom';

import { StyledLink } from '../';
import { IHeaderNavigation } from '../../interfaces';

export const HeaderNavigation = ({ history }: IHeaderNavigation) => {
    return (
        <Container>
            <Router history={history}>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'/franchising'}>
                    Become a Geek Retreat Franchisee
                </StyledLink>
                <StyledLink to={'/store-locations'}>Store Finder</StyledLink>

                <StyledLink to={'/about'}>About</StyledLink>
                <StyledLink to={'/shop-online'}>Shop Online</StyledLink>
            </Router>
        </Container>
    );
};

const Container = styled.nav`
    padding: 1rem;
`;
