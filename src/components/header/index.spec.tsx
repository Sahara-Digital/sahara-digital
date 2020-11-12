import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './';
import { fullMount } from '../../helpers/index';

const getTarget = () => {
    return fullMount(<Header />);
};
describe('<Header  />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
});
