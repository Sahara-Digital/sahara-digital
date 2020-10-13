import React from 'react';
import styled from 'styled-components';
import { Card, Navigation, HeaderNavigation, Footer } from '../../components';
import { ShapeFour, ShapeThree } from '../../components/image/svg';
import { Shapes } from '../../components';
import { IPagesProps } from '../../interfaces';
import media from 'styled-media-query';

export const Home = ({ history }: IPagesProps) => {
    return (
        <>
            <Navigation history={history}>
                <HeaderNavigation />
            </Navigation>
            <Main>
                <Content className="qa-homepage-content">
                    <h1>
                        Solution driven <br /> digital consultancy
                    </h1>
                    <p>
                        Welcome to Sahara Digital, a digital agency that
                        provides a range of Web Development and Application
                        services.
                    </p>
                    <Paragraph>
                        People are at the core of everything that we do at
                        Sahara Digital, whether it’s our team of knowledgeable
                        developers, or you and your unique business. Each of our
                        teams will bring together a well-rounded skill set to
                        provide the quality that you are looking for. Whether
                        you are a small business or large company, we have the
                        design and navigation solution to make you stand out
                        from the crowd.
                    </Paragraph>
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
const CardContainer = styled.div`
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
const Content = styled.div`
    width: 100%;
    display: flex;
    padding: 2rem;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    text-align: center;
    ${media.lessThan('small')`
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
    ${media.lessThan('small')`
       padding: 0.5rem;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
