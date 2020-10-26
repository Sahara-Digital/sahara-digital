import React from 'react';
import styled from 'styled-components';

export const Header: React.FunctionComponent<unknown> = (): JSX.Element => {
    return (
        <HeaderWrapper className="header-wrapper">
            <Anchor
                className="anchor-tag-email"
                href="mailto:hello@saharadigital.co.uk"
            >
                <i className="fas fa-envelope"></i>hello@saharadigital.co.uk
            </Anchor>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${({ theme }) => `color: ${theme.colors.brand.primary}`};
    padding: 0.5rem;
`;
HeaderWrapper.displayName = 'HeaderWrapper';

const Anchor = styled.a`
    text-decoration: none;
    ${({ theme }) => `color: ${theme.colors.black}`};
`;
Anchor.displayName = 'Anchor';
