import React from 'react';

import { shallowMount } from '../../helpers';
import { StyledLink } from './';

const props: any = {
    to: '/test',
    color: 'red',
};
const getTarget = (color?: any, to?: any) => {
    return shallowMount(
        <StyledLink color={color} to={to}>
            test
        </StyledLink>,
    );
};
describe('<StyledLink />', () => {
    it('should render a StyledLink Component', () => {
        const wrapper = getTarget();
        expect(wrapper.find('StyledLink')).not.toBeUndefined();
        expect(wrapper.find('StyledLink').length).toEqual(1);
    });

    it('should render a link', () => {
        const { to, color } = props;
        const wrapper = getTarget(color, to);
        const component = getTarget();
        expect(
            component.find('StyledLink').find('StyledLink').props().to,
        ).toBeUndefined();
        expect(
            wrapper.find('StyledLink').find('StyledLink').props().to,
        ).not.toBeUndefined();
    });

    it('should change the color', () => {
        const defaultProps = { to: '', color: 'orange' };
        const { color } = defaultProps;
        const wrapper = getTarget(color);
        const component = getTarget();
        expect(
            component.find('StyledLink').find('StyledLink').props().color,
        ).toBeUndefined();
        expect(
            wrapper.find('StyledLink').find('StyledLink').props().color,
        ).toEqual('orange');
    });

    it('should render the text', () => {
        const { to } = props;
        const wrapper = getTarget(to);
        expect(wrapper.find('StyledLink').text()).toEqual('test');
        expect(wrapper.find('StyledLink').find('StyledLink').props());
    });
});
