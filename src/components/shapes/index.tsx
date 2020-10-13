import React from 'react';
import styled from 'styled-components';
import {
    ShapeFour,
    ShapeOne,
    ShapeThree,
    ShapeTwo,
    ShapeFive,
} from '../../components/image/svg';

export const Shapes = () => {
    return (
        <ShapesContainer>
            <ShapeOne width="15rem" />
            <ShapeTwo width="5rem" />
            <ShapeThree width="10rem" />
            <ShapeFour width="10rem" />
            <ShapeFive width="5rem" />
            <ShapeThree width="10rem" />
            <ShapeTwo width="7rem" />
            <ShapeFour width="7rem" />
            <ShapeOne width="15rem" />
        </ShapesContainer>
    );
};

const ShapesContainer = styled.div<{ zIndex?: number }>`
    z-index: -1;
    position: absolute;
    top: 100px;
    left: 275px;
`;
