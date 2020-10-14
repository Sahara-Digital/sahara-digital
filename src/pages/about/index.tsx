import React from 'react';
import {
    Navigation,
    HeaderNavigation,
    BurgerMenu,
    Menu,
} from '../../components';
import { IPagesProps } from '../../interfaces';

export const About = ({history}: IPagesProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Navigation history={history}>
                {open === false && <HeaderNavigation />}
                {<BurgerMenu open={open} setOpen={setOpen} />}
                <Menu open={open} setOpen={setOpen} />
            </Navigation>
            About Page
        </>
    );
};
