import React from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import { Image } from '../';
import { saharadigital } from '../../img';
import { IHeaderNavigation } from '../../interfaces';
import { StyledLink } from '../styled-link';

export const Navigation = ({ children, history }: IHeaderNavigation) => {
    return (
        <NavigationContainer className="container">
            <Router history={history}>
                <StyledLink to={'/'}>
                    <Image
                        width="11rem"
                        img={saharadigital}
                        alt="Sahara Digitial Logo"
                    />
                </StyledLink>
            </Router>

            {children}
        </NavigationContainer>
    );
};

const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    box-shadow: 0 2px 8px rgb(221, 221, 221);
`;
