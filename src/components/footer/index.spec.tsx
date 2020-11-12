import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './';
import { fullMount } from '../../helpers/index';

const getTarget = () => {
    return fullMount(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>,
    );
};
describe('<Footer  />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
});
