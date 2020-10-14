import React from 'react';
import styled from 'styled-components';
import { Image } from '../../components';
import { saharadigital } from '../../img';
import { StyledLink } from '../styled-link';
import media from 'styled-media-query';

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterContent className="qa-company-info">
                        <Image
                            width="9rem"
                            img={saharadigital}
                            alt="Sahara Digital Logo"
                        />
                        <span>&copy; 2020 Sahara Digital.</span>
                        <span>Company no: 12636576.</span>
                    </FooterContent>

                    <FooterContent>
                        <h3>Navigation</h3>

                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/about">About</StyledLink>
                        <StyledLink to="/services">Services</StyledLink>

                        <StyledLink to="/careers">Careers</StyledLink>
                        <StyledLink to="/team">Team</StyledLink>
                        <StyledLink to="/contact">Contact</StyledLink>
                    </FooterContent>
                    <FooterContent className="qa-contact-us">
                        <h3>Contact us </h3>
                        <span>
                            <a href="mailto:hello@saharadigital.co.uk">
                                <i className="far fa-envelope"></i>
                            </a>
                        </span>
                    </FooterContent>
                    <FooterContent className="qa-social-media-links-container">
                        <h3>Social Media</h3>
                        <SocialMediaLinks className="qa-social-media-links">
                            <a
                                href="https://twitter.com/Sahara__Digital"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/saharadigital/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </SocialMediaLinks>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
            <TermsAndPolicy className="qa-terms-privacy-policy">
                <FooterLink to="/termsandconditions">
                    Terms and conditions
                </FooterLink>
                <FooterLink to="/privacypolicy">Privacy policy</FooterLink>
            </TermsAndPolicy>
        </>
    );
};

const FooterLink = styled(StyledLink)`
    padding: 0.5rem 0.5rem;
`;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => `background-color :${theme.colors.footer.primary}`};
    a {
        text-decoration: none;
        ${({ theme }) => `color :${theme.colors.brand.primary}`};
    }
    h3 {
        ${({ theme }) => `color :${theme.colors.white}`};
    }
`;

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    ${({ theme }) => `color :${theme.colors.brand.primary}`};
    ${({ theme }) => `font-size:${theme.fontsize.regular}`};
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
       margin: 0;
       flex-direction: column;
       ${({ theme }) => `font-size:${theme.fontsize.small}`};
  `}
`;

const FooterContent = styled.span`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 1.5rem 0 0;
    padding: 2rem;
    text-align: left;
    .fa-envelope {
        font-size: 24px;
        padding-right: 0.3rem;
    }
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
       margin: 0;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    `}
`;
const SocialMediaLinks = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 24px;
    .fa-linkedin {
        ${({ theme }) => `color:${theme.colors.footer.linkedIn}`};
    }
    .fa-twitter {
        ${({ theme }) => `color:${theme.colors.footer.twitter}`};
    }
    .fa-twitter:hover,
    .fa-linkedin:hover {
        ${({ theme }) => `color:${theme.colors.white}`};
    }

    ${media.lessThan('small')` 
        margin: 0;
        flex-direction: row;
        justify-content: center;
        .fa-linkedin, .fa-twitter{
            ${({ theme }) => `font-size:${theme.fontsize.regular}`}; 
        }
    `}
`;

const TermsAndPolicy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    ${({ theme }) => `background-color :${theme.colors.footer.primary}`};
    ${({ theme }) => `font-size:${theme.fontsize.medium}`};
    ${media.lessThan('small')`
        margin: 0;
        a {
            ${({ theme }) => `font-size:${theme.fontsize.small}`};
        }
    `}
`;
