import React from 'react';
import { ISVG } from '../../../interfaces';

export const SVG = ({
    viewBox = '0 0 200 200',
    fill = '#E8DAFF',
    width,
}: ISVG) => {
    return (
        <svg viewBox={viewBox} width={width}>
            <path
                fill={fill}
                d="M46.2,-58.2C55.4,-47.3,55.4,-28.5,53.4,-13.3C51.4,1.8,47.4,13.5,43.3,29C39.1,44.6,34.8,64.2,23.2,71.9C11.6,79.7,-7.2,75.6,-22.8,67.7C-38.3,59.8,-50.6,48.1,-57.3,34.2C-63.9,20.3,-65,4.3,-60.8,-9.2C-56.6,-22.8,-47.2,-33.9,-36.2,-44.5C-25.2,-55.1,-12.6,-65.2,2.9,-68.7C18.5,-72.2,36.9,-69.1,46.2,-58.2Z"
                transform="translate(100 100)"
            />
        </svg>
    );
};
