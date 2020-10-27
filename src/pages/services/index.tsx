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
import { ShapeFour, ShapeThree } from '../../components/image/svg';
import { IPagesProps } from '../../interfaces';
import { customMedia } from '../../lib';
import { homepage } from '../../lib/website-content';

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
                <CardContainer className="services-card-container">
                    {homepage.map((content: Record<string, string>) => {
                        return (
                            content.title && (
                                <Card
                                    className="services-page-card"
                                    key={content.id}
                                    title={content.title}
                                    component={
                                        content.title === 'Web Consulting' ? (
                                            <ShapeFour width="10rem" />
                                        ) : (
                                            <ShapeThree width="10rem" />
                                        )
                                    }
                                    paragraph={content.paragraph}
                                />
                            )
                        );
                    })}
                </CardContainer>
            </ServicesMain>
            <Footer className="footer-component" />
        </>
    );
};

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
  `}
`;
CardContainer.displayName = 'Cardcontainer';
