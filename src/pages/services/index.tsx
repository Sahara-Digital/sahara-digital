import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
    Card,
    Navigation,
    HeaderNavigation,
    Footer,
    BurgerMenu,
    Menu,
} from '../../components';
import {
    ShapeFour,
    ShapeThree,
    RightArrow,
    ShapeTwo,
    ShapeFive,
    Digital,
    WebDesign,
} from '../../components/image/svg';
import { IPagesProps } from '../../interfaces';
import { customMedia } from '../../lib';
import { homepage } from '../../lib/website-content';
import { StyledLink } from '../../components/styled-link/index';

const CardContent = (content: any) => {
    if (content.title === 'Web Consulting') return <ShapeFour width="10rem" />;
    else if (content.title === 'Web Hosting') return <ShapeTwo width="10rem" />;
    else if (content.title === 'Web Design') return <ShapeFive width="10rem" />;
    else return <ShapeThree width="10rem" />;
};

export const Services: React.FunctionComponent<IPagesProps> = ({
    history,
}: IPagesProps) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <Navigation className="navigation-component" history={history}>
                <HeaderNavigation className="header-navigation-component" />
                <BurgerMenu
                    className="header-navigation-component"
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
                <Menu
                    className="menu-component"
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
            </Navigation>
            <ServicesMain className="services-main">
                <ServicesHeading className="services-heading">
                    Services
                </ServicesHeading>
                <ServicesPageWrapper>
                    <Paragraph>
                        Selecting the right service for your business is
                        paramount, so whether you want a website for your
                        product, company or to hire a developer to assist with
                        your product or service.
                    </Paragraph>
                    <CardContainer className="services-card-container">
                        {homepage.map((content: Record<string, string>) => {
                            return (
                                content.title && (
                                    <React.Fragment key={content.id}>
                                        <Card
                                            className="services-page-card"
                                            key={content.id}
                                            title={content.title}
                                            component={CardContent(content)}
                                            paragraph={content.paragraph}
                                        />
                                        {/* <StyledLink to={content.weblink}>
                                                <RightArrow />
                                            </StyledLink> */}
                                        {/* </Card> */}
                                    </React.Fragment>
                                )
                            );
                        })}
                    </CardContainer>
                </ServicesPageWrapper>
                <ServicesPageWrapper>
                    <ServicesHeading className="products-heading">
                        Products
                    </ServicesHeading>
                    <Paragraph>
                        We offer a full product service in which we consult with
                        you to find out what your business needs to assist in
                        your digital transformation and we invest in your growth
                        from start to finish.
                    </Paragraph>
                    <DigitalTransformation>
                        <div>
                            <h2>Digital Transformation</h2>
                            <Paragraph>
                                Digital transformation for a small business or a
                                growing company could be something on a small
                                scale of updating the website to allow
                                subscriptions to a news letter or on a larger
                                scale of a business that operates a retail store
                                but does not have an online platform, if you
                                would like to know more,
                                <ContactLink to="/contact">
                                    contact us here.
                                </ContactLink>
                            </Paragraph>
                        </div>
                        <Digital />
                    </DigitalTransformation>

                    <OnlineWebPresence>
                        <WebDesign />
                        <div>
                            <h2>Online Web Presence</h2>

                            <Paragraph>
                                Our approach to development will allow you to
                                focus on what your business needs, if you
                                require a design solution or a website we aim to
                                provide you with a tailor made solution
                                appropriate for your needs, wether that is a
                                fully customised website or design using our
                                internal software, or using one of the existing
                                platforms, if you would like to know more you
                                can contact us
                                <ContactLink to="/contact">here</ContactLink>.
                            </Paragraph>
                        </div>
                    </OnlineWebPresence>
                </ServicesPageWrapper>
            </ServicesMain>
            <Footer className="footer-component" />
        </>
    );
};
const ContactLink = styled(StyledLink)`
    padding-left: 0.2rem;
`
const DigitalTransformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid #9ccccc;
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    h2 {
        margin-top: 1rem;
    }
    svg {
        margin: 1rem;
    }
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
       margin: 0;
       flex-direction: column;
       svg {
        margin: 0;
        width: 75%;
    }
  `}
`;
const OnlineWebPresence = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid #9ccccc;
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    h2 {
        margin-top: 1rem;
    }
    svg {
        margin: 1rem;
        width: 50%;
    }
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
       margin: 0;
       flex-direction: column-reverse;
       svg {
        margin: 0;
        width: 75%;
    }
  `}
`;

const ServicesMain = styled.main`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
    `}
`;
ServicesMain.displayName = 'ServicesMain';

const ServicesHeading = styled.h2`
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
ServicesHeading.displayName = 'ServicesHeading';

const ServicesPageWrapper = styled.section`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
    `}
`;

const CardContainer = styled.section`
    display: flex;
    padding: 2rem;
    margin: 2rem;
    text-align: center;
    /* flex-direction: row; */
    flex-flow: wrap;
    justify-content: center;
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
       margin: 0;
       flex-direction: column;
  `}
`;
CardContainer.displayName = 'Cardcontainer';

const Paragraph = styled.p`
    padding: 2rem;
    max-width: 750px;
    ${customMedia.lessThan('small')`
       padding: 1rem;
    `}
`;
Paragraph.displayName = 'Paragraph';
