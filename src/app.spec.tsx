import React from 'react';
import App from './App';
import { shallowMount, fullMount } from './helpers';

const getTarget = () => {
    return shallowMount(<App />);
};

const newTarget = () => {
    return fullMount(<App />);
};

describe('App', () => {
    const wrapper = getTarget();
    it('should render the App component', () => {
        expect(wrapper.find('App')).not.toBeUndefined();
    });

    it('should have a length', () => {
        const wrapper = newTarget();
        expect(wrapper).toHaveLength(1);
    });
});
