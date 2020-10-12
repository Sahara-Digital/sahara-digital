import React from 'react';
import styled from 'styled-components';
import { MenuLink } from '../';

export const HeaderNavigation = () => {
    return (
        <Container>
            <MenuLink to={'/'}>Home</MenuLink>
            <MenuLink to={'/about'}>About</MenuLink>
            <MenuLink to={'/services'}>Services</MenuLink>
            <MenuLink to={'/team'}>Team</MenuLink>
            <MenuLink to={'/careers'}>Careers</MenuLink>
            <MenuLink to={'/contact'}>Contact</MenuLink>
        </Container>
    );
};

const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
`;
