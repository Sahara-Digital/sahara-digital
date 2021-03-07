import React from 'react';
import { Team } from './';
import { fullMount } from '../../helpers/index';

import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';

const history = createMemoryHistory();

const getTarget = () => {
    return fullMount(
        <MemoryRouter>
            <Team history={history} />
        </MemoryRouter>,
    );
};
describe('<Team />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
});
