import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { BurgerMenu } from './';
import { fullMount } from '../../helpers/index';

const isOpen = jest.fn();
const setOpen = jest.fn();
const getTarget = () => {
    return fullMount(<BurgerMenu isOpen={isOpen} setOpen={setOpen} />);
};
describe('<BurgerMenu  />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
});
