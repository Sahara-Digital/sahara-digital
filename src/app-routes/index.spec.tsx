import React from 'react';
import Routes from '.';
import { fullMount } from '../helpers/index';
import { createMemoryHistory } from 'history';
import { Home } from '../pages';

export const history = createMemoryHistory();

const getTarget = () => {
    return fullMount(<Routes history={history} />);
};

describe('<Routes />', () => {
    it('should render without error', () => {
        const wrapper = getTarget();
        expect(wrapper).not.toBeUndefined();
        expect(wrapper.find('Routes').length).toEqual(1);
    });
    it('should show Home component', () => {
        const wrapper = getTarget();
        expect(wrapper.find(Home)).toHaveLength(1);
    });
});
