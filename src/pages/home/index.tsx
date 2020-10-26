import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
    Navigation,
    HeaderNavigation,
    Footer,
    Shapes,
    BurgerMenu,
    Menu,
} from '../../components';
import { IPagesProps } from '../../interfaces';
import { customMedia } from '../../lib';
import { homepageIntro } from '../../lib/website-content';

export const Home: React.FunctionComponent<IPagesProps> = ({
    history,
}: IPagesProps): JSX.Element => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Navigation className="navigation-component" history={history}>
                <HeaderNavigation className="header-navigation-component" />
                <BurgerMenu
                    className="header-navigation-component"
                    open={open}
                    setOpen={setOpen}
                />
                <Menu
                    className="menu-component"
                    open={open}
                    setOpen={setOpen}
                />
            </Navigation>
            <HomePageMain className="homepage-main">
                <Content className="homepage-content">
                    <h1>
                        Solution driven <br /> digital consultancy
                    </h1>
                    {homepageIntro.map((intro: Record<string, string>) => {
                        return (
                            <Paragraph
                                className="home-page-paragraph-intro"
                                key={intro.id}
                            >
                                {intro.paragraph}
                            </Paragraph>
                        );
                    })}
                    <Shapes />
                </Content>
            </HomePageMain>
            <Footer className="footer-component" />
        </>
    );
};

const Paragraph = styled.p`
    padding: 7rem 2rem 2rem 2rem;
    max-width: 750px;
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
Paragraph.displayName = 'Paragraph';

const Content = styled.section`
    width: 100%;
    display: flex;
    padding: 2rem;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    text-align: center;
    ${customMedia.lessThan('small')`
       padding: 1rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
const HomePageMain = styled.main`
    padding: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
HomePageMain.displayName = 'HomePageMain';
