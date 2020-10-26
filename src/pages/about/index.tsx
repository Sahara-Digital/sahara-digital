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
import { customMedia } from '../../lib';

export const About: React.FunctionComponent<IPagesProps> = ({
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
            <AboutUsMain>
                <AboutUsWrapper className="about-us-wrapper">
                    <div>
                        <AboutUsHeading className="about-us-heading">
                            About us
                        </AboutUsHeading>
                        {aboutPage.map((intro: Record<string, any>) => {
                            return (
                                <React.Fragment key={intro.id}>
                                    {intro.id < 3 ? (
                                        <Paragraph className="about-us-paragraph">
                                            {intro.paragraph}
                                        </Paragraph>
                                    ) : (
                                        <></>
                                    )}
                                    {intro.id === '1' ? (
                                        <CogWrapper className="about-us-cog-wrapper">
                                            <Cog className="about-us-cog" />
                                        </CogWrapper>
                                    ) : (
                                        <></>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </AboutUsWrapper>
                <AboutUsServices className="about-us-services">
                    {aboutPage[2].cardcontent.map(
                        (content: Record<string, string>) => {
                            return (
                                <React.Fragment key={content.id}>
                                    <Card
                                        className="about-us-card"
                                        title="Digital Services"
                                        key={content.id}
                                        paragraph={content.paragraph}
                                        itag={
                                            <Code className="about-us-html-code" />
                                        }
                                        backgroundColor={'white'}
                                    />
                                </React.Fragment>
                            );
                        },
                    )}
                </AboutUsServices>
                <AboutUsContent className="about-us-content">
                    <WhyUs className="about-us-work-with-us">
                        Why work with us?
                    </WhyUs>
                    <ValuesWrapper className="about-us-company-values">
                        {values.map((value: any) => {
                            return (
                                <React.Fragment key={value.id}>
                                    <Values
                                        className="about-us-values"
                                        key={value.id}
                                    >
                                        <Paragraph className="about-us-paragraph">
                                            <strong>{value.name}</strong> <br />
                                            {value.paragraph}
                                        </Paragraph>
                                        <Cog className="about-us-cog" />
                                    </Values>
                                </React.Fragment>
                            );
                        })}
                    </ValuesWrapper>
                </AboutUsContent>
            </AboutUsMain>
            <Footer className="footer-component" />
        </>
    );
};

const AboutUsMain = styled.main`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
    `}
`;
AboutUsMain.displayName = 'AboutUsMain';

const CogWrapper = styled.div`
    text-align: center;
`;
CogWrapper.displayName = 'CogWrapper';

const AboutUsServices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    .fa-code {
        margin: 1rem;
        font-size: 24px;
        background-color: #7cffcb;
        background-image: linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);
    }
`;
AboutUsServices.displayName = 'AboutUsServices';

const AboutUsWrapper = styled.section`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
    `}
`;
AboutUsWrapper.displayName = 'AboutUsWrapper';

const AboutUsContent = styled.section`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
    `}
`;
AboutUsContent.displayName = 'AboutUsContent';

const ValuesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`;
ValuesWrapper.displayName = 'ValuesWrapper';

const Values = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
`;
Values.displayName = 'Values';

const Paragraph = styled.p`
    padding: 2rem;
    max-width: 750px;
    ${customMedia.lessThan('small')`
       padding: 1rem;
    `}
`;
Paragraph.displayName = 'Paragraph';

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
WhyUs.displayName = 'WhyUs';

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
AboutUsHeading.displayName = 'AboutUsHeading';
