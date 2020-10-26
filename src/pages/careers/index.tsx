import React from 'react';
import styled from 'styled-components';
import {
    Navigation,
    HeaderNavigation,
    Footer,
    BurgerMenu,
    Menu,
} from '../../components';
import { IPagesProps } from '../../interfaces';
import { customMedia } from '../../lib';

export const Careers: React.FunctionComponent<IPagesProps> = ({
    history,
}: IPagesProps): JSX.Element => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <Navigation className="navigation-component" history={history}>
                <HeaderNavigation className="header-navigation-component" />
                <BurgerMenu
                    className="header-navigation-component"
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
                <Menu
                    className="menu-component"
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
            </Navigation>
            <CareersMain className="careers-main">Careers</CareersMain>
            <Footer className="footer-component" />
        </>
    );
};

const CareersMain = styled.main`
    padding: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
  `}
`;
CareersMain.displayName = 'CareersMain';
