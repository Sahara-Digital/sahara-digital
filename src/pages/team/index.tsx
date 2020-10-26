import React from 'react';
import styled from 'styled-components';
import {
    Navigation,
    HeaderNavigation,
    Footer,
    BurgerMenu,
    Menu,
} from '../../components';
import { IPagesProps } from '../../interfaces';
import { customMedia } from '../../lib';
import { team } from '../../lib/website-content';

export const Team: React.FunctionComponent<IPagesProps> = ({
    history,
}: IPagesProps) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Navigation className="navigation-component" history={history}>
                <HeaderNavigation className="header-navigation-component" />
                {
                    <BurgerMenu
                        className="header-navigation-component"
                        open={open}
                        setOpen={setOpen}
                    />
                }
                <Menu
                    className="menu-component"
                    open={open}
                    setOpen={setOpen}
                />
            </Navigation>
            <TeamMain className="team-page-main">
                <TeamHeading className="contact-us-heading">Team</TeamHeading>
                {team.map((content) => {
                    return <div key={content.id}>{content.paragraph}</div>;
                })}
            </TeamMain>
            <Footer className="footer-component" />
        </>
    );
};

const TeamMain = styled.main`
    padding: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
  `}
`;
TeamMain.displayName = 'TeamMain';

const TeamHeading = styled.h2`
    text-transform: uppercase;
    ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
    font-weight: 500;
    letter-spacing: 1px;
    margin: 20px;
    line-height: 1.2;
    border-radius: 3px;
    ${({ theme }) => `border-bottom: 5px solid ${theme.colors.brand.primary}`};
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    ${customMedia.lessThan('small')`
       text-align: center;
       ${({ theme }) => `font-size:${theme.fontsize.xlarge}`};
       ${({ theme }) =>
           `border-bottom: 5px solid ${theme.colors.brand.primary}`};
    `}
`;
TeamHeading.displayName = 'TeamHeading';
