import React from 'react';
import { ISVG } from '../../../interfaces';

export const SVG = ({
    viewBox = '0 0 200 200',
    fill = '#D0E2FF',
    width,
}: ISVG) => {
    return (
        <svg viewBox={viewBox} width={width}>
            <path
                fill={fill}
                d="M25.5,-17.2C34.9,-8.5,45.8,2.2,47.2,16.6C48.6,31,40.5,49.1,28.6,52C16.7,54.8,1.1,42.5,-15.8,34C-32.8,25.4,-51,20.6,-52.3,12.5C-53.7,4.5,-38.2,-6.8,-26.7,-16.1C-15.2,-25.3,-7.6,-32.4,0.2,-32.6C8,-32.7,16,-25.9,25.5,-17.2Z"
                transform="translate(100 100)"
            />
        </svg>
    );
};
