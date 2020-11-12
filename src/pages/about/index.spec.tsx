import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { About } from './';
import { fullMount } from '../../helpers/index';

const history = createMemoryHistory();

const getTarget = () => {
    return fullMount(
        <MemoryRouter>
            <About history={history} />{' '}
        </MemoryRouter>,
    );
};

describe('<About />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
});
