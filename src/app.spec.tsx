import React from 'react';
import App from './App';
import { shallowMount } from './helpers';

const getTarget = () => {
    return shallowMount(<App />);
};

describe('App', () => {
    const wrapper = getTarget();
    it('should render the App component', () => {
        expect(wrapper.find('App')).not.toBeUndefined();
    });

    it('should have a length', () => {
        expect(wrapper).toHaveLength(1);
    });
});
