import React from 'react';
import Routes from '.';
import { shallowMount } from '../helpers';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

const getTarget = () => {
    return shallowMount(<Routes history={history} />);
};

describe('<Routes />', () => {
    fit('should render without error', () => {
        const wrapper = getTarget();
        expect(wrapper.find('Routes').length).toEqual(1);
    });
});
