import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { Menu } from './menu';
import { fullMount } from '../../helpers/index';

const isOpen = jest.fn();
const setOpen = jest.fn();
const getTarget = () => {
    return fullMount(
        <MemoryRouter>
            <Menu isOpen={isOpen} setOpen={setOpen} />
        </MemoryRouter>,
    );
};
describe('<Menu  />', () => {
    const component = getTarget();
    it('should render without error', () => {
        expect(component).not.toBeUndefined();
        expect(component).toHaveLength(1);
    });
});
