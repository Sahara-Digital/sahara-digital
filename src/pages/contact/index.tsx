import React from 'react';
import {
    Navigation,
    HeaderNavigation,
    Footer,
    BurgerMenu,
    Menu,
} from '../../components';
import { IPagesProps } from '../../interfaces';

export const Contact = ({ history }: IPagesProps) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Navigation history={history}>
                <HeaderNavigation />
                {<BurgerMenu open={open} setOpen={setOpen} />}
                <Menu open={open} setOpen={setOpen} />
            </Navigation>
            Contact
            <Footer />
        </>
    );
};
