import React from 'react';
import styled from 'styled-components';

interface ICardProps {
    component?: React.ReactNode;
    backgroundColor?: string;
    title?: string;
}
export const Card = ({ component, backgroundColor, title }: ICardProps) => {
    return (
        <CardWrapper backgroundColor={backgroundColor}>
            <span className="container">
                <SVGWrapper> {component} </SVGWrapper>
            </span>
            <h3>{title}</h3>
            <p>
                Our approach integrates lean user-centred experience design with
                Agile delivery and DevOps. This allows us to consistently
                deliver meaningful transformation.
            </p>
        </CardWrapper>
    );
};
const SVGWrapper = styled.div`
    position: absolute;
    top: -100px;
    left: 0;
`;
const CardWrapper = styled.div<{
    top?: number;
    left?: number;
    backgroundColor?: string;
}>`
    padding: 2rem;
    text-align: center;
    max-width: 350px;
    margin: 1rem;
    position: relative;
    ${({ theme }) => `background-color:${theme.colors.white}`};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
    .container {
    }

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
                : `background-color:#4da6ff;`};
        mix-blend-mode: darken;
    }
    &:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
    }
`;
