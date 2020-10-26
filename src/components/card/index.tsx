import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../../lib';

interface ICardProps {
    component?: React.ReactNode;
    backgroundColor?: string;
    title?: string;
    itag?: any;
    paragraph?: string;
    className?: string;
}
export const Card: React.FunctionComponent<ICardProps> = ({
    component,
    backgroundColor,
    title,
    itag,
    paragraph,
}: ICardProps): JSX.Element => {
    return (
        <CardWrapper className="card-wrapper" backgroundColor={backgroundColor}>
            <span className="container">
                {component ? <SVGWrapper>{component}</SVGWrapper> : itag}
            </span>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </CardWrapper>
    );
};
const SVGWrapper = styled.div`
    position: absolute;
    top: -100px;
    left: 0;
`;
SVGWrapper.displayName = 'SVGWrapper';

const CardWrapper = styled.div<{
    top?: number;
    left?: number;
    backgroundColor?: string;
}>`
    padding: 1.5rem;
    text-align: center;
    max-width: 350px;
    margin: 1rem;
    position: relative;
    ${({ theme }) => `background-color:${theme.colors.white}`};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
    span {
        font-size: 20px;
        padding: 8px 20px;
        position: relative;
        z-index: 1;
    }

    span:before {
        content: '';
        position: absolute;

        ${({ left }) => (left ? `${left} ` : `left: 100px;`)};
        ${({ top }) => (top ? `${top}` : ` top: -5px`)};
        transform: translate(50%, -50%);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        ${({ theme, backgroundColor }) =>
            backgroundColor
                ? `${backgroundColor}`
                : `background-color: ${theme.colors.blue}`};
        mix-blend-mode: darken;
    }
    &:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
    }
    ${customMedia.lessThan('regular')`
       padding: 1rem;
    `}
`;
CardWrapper.displayName = 'CardWrapper';
