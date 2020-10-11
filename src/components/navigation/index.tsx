import React from 'react';
import styled from 'styled-components';
import { Image } from '../';
import { saharadigital } from '../../img'
interface IProps {
    children?: React.ReactNode;

}
export const Navigation = ({ children }: IProps) => {
    return (
        <NavigationContainer className="container">
            <Image width="11rem" img={saharadigital} alt='Sahara Digitial Logo' />
            {children}
        </NavigationContainer>
    );
}

const NavigationContainer = styled.nav`
  display: flex; 
  flex-direction: row;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgb(221, 221, 221);
`
