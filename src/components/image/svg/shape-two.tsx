import React from 'react';
import { ISVG } from '../../../interfaces';

export const SVG = ({ viewBox = '0 0 200 200', fill = '#F1C21B', width }: ISVG) => {
    return (
        <svg viewBox={viewBox}
            width={width}
        >
            <path
                fill={fill}
                d="M51,-28.2C62.5,-9.6,65.7,15.1,55.8,28.4C45.9,41.6,23,43.5,5.4,40.3C-12.1,37.2,-24.1,29.1,-26.8,19.9C-29.5,10.8,-22.9,0.7,-16.8,-14.7C-10.8,-30.2,-5.4,-51.1,7.2,-55.3C19.8,-59.4,39.5,-46.8,51,-28.2Z"
                transform="translate(100 100)"
            />
        </svg>
    );
};
