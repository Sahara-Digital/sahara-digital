import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { MenuLink } from '../';
import { customMedia } from '../../lib/index';
import { navigation } from '../../lib/website-content';

interface IProps {
    isOpen?: boolean;
    className?: string;
}
export const HeaderNavigation: React.FunctionComponent<IProps> = ({
    isOpen,
}: IProps): JSX.Element => {
    return (
        <HeaderContainer className="header-container" isOpen={isOpen}>
            {navigation.map((path: Record<string, any>) => {
                return (
                    <MenuLink key={path.id} exact={true} to={process.env.PUBLIC_URL + path.to}>
                      {path.name}
                    </MenuLink>
                );
            })}
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div<{ isOpen: any }>`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    ${media.lessThan('small')`
        margin: 0;
        a {
            ${({ theme }) => `font-size:${theme.fontsize.small}`};
        }
        flex-direction: column;
        padding: 0;
        display: none;
    `}

    ${customMedia.between('xxsmall', 'medium')` 

     display: none;
    `}
    ${customMedia.between('medium', 'tablet')` 
        padding: 0;
    `}
`;
HeaderContainer.displayName = 'HeaderContainer';
