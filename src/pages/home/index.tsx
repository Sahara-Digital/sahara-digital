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

export const Home = ({ history }: IPagesProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Navigation history={history}>
                <HeaderNavigation />
                {<BurgerMenu open={open} setOpen={setOpen} />}
                <Menu open={open} setOpen={setOpen} />
            </Navigation>
            <Main>
                <Content className="qa-homepage-content">
                    <h1>
                        Solution driven <br /> digital consultancy
                    </h1>
                    {homepageIntro.map((intro: any) => {
                        return (
                            <Paragraph key={intro.id}>
                                {intro.paragraph}
                            </Paragraph>
                        );
                    })}
                    <Shapes />
                </Content>
            </Main>
            <Footer />
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
const Main = styled.main`
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
