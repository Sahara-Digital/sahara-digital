import React from 'react';
import { ISVG } from '../../../interfaces';

export const SVG = ({
    width,
    height,
    viewBox = '0 0 1012 906',
}: ISVG): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d)">
                <path
                    d="M23 425C35 412 474.865 29.5143 488 19C501.135 8.48576 509.197 8.17187 525 19L670 144V93C670 81 678 66 700 66H865C877 66 889 80 889 93V335C889 335 977.44 412.48 990 425C1003.9 438.857 995.5 460.5 990 466C984.5 471.5 959 472.5 952 466C945 459.5 889 411 889 411V803C889 864 840.5 888 807 888H204C167 888 124 853.5 124 803V411C124 411 68.3719 455.175 59 463C49.6281 470.825 34.5 475 23 463C11.5 451 11 438 23 425Z"
                    stroke="black"
                    strokeWidth="20"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d"
                    x="0.186523"
                    y="0.996185"
                    width="1011.4"
                    height="905.004"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
