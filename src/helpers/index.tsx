import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled-components';

configure({ adapter: new Adapter() });

export const shallowMount = (children?: React.ReactChild): any => {
    return shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export const fullMount = (
    children: React.ReactChild,
    props?: Record<any, any>,
): any => {
    return mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
