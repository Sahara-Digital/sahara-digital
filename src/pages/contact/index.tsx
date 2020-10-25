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
import { contactUs } from '../../lib/website-content';

export const Contact = ({ history }: IPagesProps) => {
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
            <ContactUsMain className="contact-us-main">
                <ContactUsWrapper className="contact-us-wrapper">
                    <ContactUsHeading className="contact-us-heading">Contact Us</ContactUsHeading>
                    {contactUs.map((contact: any) => {
                        return (
                            <ContactUsContent className="contact-us-content" key={contact.id}>
                                <h3> {contact.subheading}</h3>

                                <Coordinates className="contact-us-coordinates">{contact.coordinates}</Coordinates>

                                <h4>{contact.subintro} </h4>

                                <Paragraph className="contact-us-paragraph"> {contact.paragraph}</Paragraph>
                                <Email className="contact-us-email">
                                    <a href="mailto:hello@saharadigital.co.uk">
                                        hello@saharadigital.co.uk
                                    </a>
                                </Email>
                            </ContactUsContent>
                        );
                    })}
                </ContactUsWrapper>
            </ContactUsMain>
            <Footer />
        </>
    );
};

const ContactUsMain = styled.main`
    padding: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
    `}
`;
ContactUsMain.displayName = "ContactUsMain";

const ContactUsWrapper = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${customMedia.lessThan('small')`
       padding: 0.5rem;
    `}
`;
ContactUsWrapper.displayName = "ContactUsWrapper";

const ContactUsHeading = styled.h2`
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
ContactUsHeading.displayName = "ContactUsHeading";

const ContactUsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 2rem;
    max-width: 500px;
    ${customMedia.lessThan('small')`
       padding: 2rem;
       margin: 2rem 0rem;
    `}
`;
ContactUsContent.displayName = "ContactUsContent";

const Paragraph = styled.p`
    padding: 2rem 2rem 2rem 0rem;
    max-width: 750px;
    ${customMedia.lessThan('small')`
       padding: 0.5rem 0;
    `}
`;
Paragraph.displayName = "Paragraph";

const Email = styled.p`
    font-size: 16px;
    a {
        text-decoration: none;
        ${({ theme }) => ` color: ${theme.colors.brand.primary};`};
        padding-bottom: 0.2rem;
    }
    a:hover {
        text-decoration: none;
        color: black;
        border-bottom: 2px solid #9ccccc;
    }
`;
Email.displayName = "Email";

const Coordinates = styled.span`
    ${({ theme }) => `color :${theme.colors.brand.primary}`};
    ${({ theme }) => `font-size:${theme.fontsize.regular}`};
    font-weight: 700;
    margin: 2rem 2rem 2rem 0rem;
    ${customMedia.lessThan('small')`
       padding: 1.75rem 0;
       margin: 0.5rem 0;
    `}
`;
Coordinates.displayName = "Coordinates";
