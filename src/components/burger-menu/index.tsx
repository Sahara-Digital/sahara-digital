import React from 'react';
import styled from 'styled-components';
import { IProps } from '../../interfaces';
import { customMedia } from '../../lib/index';

export const BurgerMenu: React.FunctionComponent<IProps> = ({
    isOpen,
    setOpen,
}: IProps): JSX.Element => {
    return (
        <StyledBurger
            className="burger-menu"
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
        >
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

const StyledBurger = styled.button<{ isOpen: any }>`
    position: absolute;
    top: 5%;
    right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ isOpen }) => (isOpen ? '#2C353C' : '#2C353C')};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};

        }

        :nth-child(2) {
            opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
            transform: ${({ isOpen }) =>
                isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }

    ${customMedia.between('slaptop', 'laptop')`
    display: none;
  `}
    ${customMedia.greaterThan(`tablet`)`
    display: none;
  `}
  ${customMedia.greaterThan(`laptop`)`
    display: none;
  `}
`;
StyledBurger.displayName = 'StyledBurger';
