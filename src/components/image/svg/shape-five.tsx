import React from 'react';
import { ISVG } from '../../../interfaces';

export const SVG = ({
    viewBox = '0 0 200 200',
    fill = '#FA4D56',
    width,
}: ISVG): JSX.Element => {
    return (
        <svg viewBox={viewBox} width={width}>
            <path
                fill={fill}
                d="M41.9,-43.6C54,-39.8,63.3,-26.3,59.5,-15.3C55.8,-4.2,39,4.3,31.4,18.6C23.7,32.8,25.1,52.8,16,65.4C6.9,78,-12.7,83.2,-25.5,76C-38.4,68.8,-44.5,49,-44.5,33.3C-44.5,17.6,-38.4,6,-37.3,-7.8C-36.3,-21.5,-40.5,-37.4,-35.1,-42.3C-29.8,-47.2,-14.9,-41.3,0,-41.3C14.9,-41.3,29.8,-47.3,41.9,-43.6Z"
                transform="translate(100 100)"
            />
        </svg>
    );
};
