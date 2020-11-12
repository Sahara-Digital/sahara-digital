import React from 'react';
import { Shapes } from './';
import { fullMount } from '../../helpers/index';

const getTarget = () => {
    return fullMount(<Shapes />);
};
describe('<Shapes />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
    it('it should render the <SVG /> Components', () => {
        expect(component.find('SVG')).toHaveLength(9);
    });
});
