import React from 'react';
import { ISVG } from '../../../interfaces';

export const SVG = ({
    viewBox = '0 0 268.832 268.832',
    className,
    width = '30px',
}: ISVG): JSX.Element => {
    return (
            <svg
                width={width}
                fill="black"
                version="1.1"
                className="u-svg-content"
                viewBox="0 0 268.832 268.832"
                x="0px"
                y="0px"
                id="svg-de5f"
            >
                <g>
                    <path 
                    d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5   c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678   c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"></path>
                </g>
            </svg>
    );
};
