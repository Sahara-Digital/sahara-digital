import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './';
import { fullMount } from '../../helpers/index';

const history = createMemoryHistory();

const getTarget = () => {
    return fullMount(<Card />);
};
describe('<Card />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
});
