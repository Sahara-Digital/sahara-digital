import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
    Card,
    Navigation,
    HeaderNavigation,
    Footer,
    Shapes,
    BurgerMenu,
    Menu,
} from '../../components';
import { ShapeFour, ShapeThree } from '../../components/image/svg';
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
                    {homepageIntro.map((intro: any)=> {
                        console.log(intro, 'intro')
                        return <Paragraph>
                            {intro.paragraph}
                        </Paragraph>
                    })}
                    <Shapes />
                </Content>

                <CardContainer>
                    <Card
                        title="IT Consulting"
                        component={<ShapeFour width="10rem" />}
                    />
                    <Card
                        title="Web Development"
                        backgroundColor={'white'}
                        component={<ShapeThree width="10rem" />}
                    />
                </CardContainer>
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
const CardContainer = styled.section`
    display: flex;
    padding: 2rem;
    margin: 2rem;
    flex-direction: row;
    justify-content: center;
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
       margin: 0;
       flex-direction: column;
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
    flex-direction: column;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
