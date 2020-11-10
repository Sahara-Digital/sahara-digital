
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled-components';
import { configure, mount } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export const shallowMount = (children?: any) => {
    return shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export const fullMount = (children: any, props?: any) => {
    return mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}