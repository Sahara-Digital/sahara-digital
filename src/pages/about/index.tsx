import React from 'react';
import styled from 'styled-components';
import {
    Navigation,
    HeaderNavigation,
    BurgerMenu,
    Menu,
    Footer,
    Card,
} from '../../components';
import { IPagesProps } from '../../interfaces';
import { aboutPage, values } from '../../lib/website-content';
import { Code, Cog } from '../../components/image/svg';

export const About = ({ history }: IPagesProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Navigation history={history}>
                <HeaderNavigation />
                {<BurgerMenu open={open} setOpen={setOpen} />}
                <Menu open={open} setOpen={setOpen} />
            </Navigation>
            <Main>
                <AboutUsWrapper>
                    <div>
                        <AboutUsHeading>About us</AboutUsHeading>
                        {aboutPage.map((intro: any) => {
                            return (
                                <React.Fragment key={intro.id}>
                                    {intro.id < 3 ? (
                                        <Paragraph>{intro.paragraph}</Paragraph>
                                    ) : (
                                        <></>
                                    )}
                                    {intro.id === '1' ? (
                                        <CogWrapper>
                                            <Cog />
                                        </CogWrapper>
                                    ) : (
                                        <></>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </AboutUsWrapper>
                <AboutUsServices>
                    {aboutPage[2].cardcontent.map((content: any) => {
                        return (
                            <React.Fragment key={content.id}>
                                <Card
                                    title="Digital Services"
                                    key={content.id}
                                    paragraph={content.paragraph}
                                    itag={<Code />}
                                    backgroundColor={'white'}
                                />
                            </React.Fragment>
                        );
                    })}
                </AboutUsServices>
                <AboutUsContent>
                    <WhyUs>Why work with us?</WhyUs>
                    <ValuesWrapper>
                        {values.map((value: any) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <Values key={value.id}>
                                        <Paragraph>
                                            <strong>{value.name}</strong> <br />
                                            {value.paragraph}
                                        </Paragraph>
                                        <Cog />
                                    </Values>
                                </React.Fragment>
                            );
                        })}
                    </ValuesWrapper>
                </AboutUsContent>
            </Main>
            <Footer />
        </>
    );
};

const Main = styled.main`
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;
const CogWrapper = styled.div`
    text-align: center;
`;

const AboutUsServices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .fa-code{
        margin: 1rem;
        font-size: 24px;
        background-color: #7cffcb;
        background-image: linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);
    }
`;

const AboutUsWrapper = styled.section`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const AboutUsContent = styled.section`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ValuesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
const Values = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    background: color lightgray;
`;

const Paragraph = styled.p`
    padding: 2rem;
    max-width: 750px;
`;

const WhyUs = styled.h2`
    font-weight: 500;
    letter-spacing: 1px;
    margin: 20px;
    line-height: 1.2;
    border-radius: 3px;
    border-bottom: 5px solid #9ccccc;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
`;

const AboutUsHeading = styled.h2`
    text-transform: uppercase;
    ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
    font-weight: 500;
    letter-spacing: 1px;
    margin: 20px;
    line-height: 1.2;
    border-radius: 3px;
    border-bottom: 5px solid #9ccccc;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
`;
