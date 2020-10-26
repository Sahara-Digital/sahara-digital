import React from 'react';
import { Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image } from '../';
import { saharadigital } from '../../img';
import { IHeaderNavigation } from '../../interfaces';

export const Navigation = ({ children, history }: IHeaderNavigation) => {
    return (
        <NavigationContainer className="navigation-container">
            <Router history={history}>
                <Link to={'/'}>
                    <Image
                        width="11rem"
                        img={saharadigital}
                        alt="Sahara Digitial Logo"
                    />
                </Link>
            </Router>
            {children}
        </NavigationContainer>
    );
};

const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    justify-content: space-between;
`;
NavigationContainer.displayName = 'NavigationContainer';
