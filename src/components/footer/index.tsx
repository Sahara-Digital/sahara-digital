import React from 'react';
import styled from 'styled-components';
import { Image } from '../../components';
import { saharadigital } from '../../img';
import {  StyledLink } from '../styled-link';

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterContent>
                        <Image width="9rem" img={saharadigital} alt="Sahara Digital Logo" />
                        <span>&copy; 2020 Sahara Digital.</span>
                        <span>Company no: 12636576.</span>
                    </FooterContent>

                    <FooterContent>
                        <span>Navigation</span>

                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/about">About</StyledLink>
                        <StyledLink to="/services">Services</StyledLink>

                        <StyledLink to="/careers">Careers</StyledLink>
                        <StyledLink to="/team">Team</StyledLink>
                        <StyledLink to="/contact">Contact</StyledLink>
                    </FooterContent>
                    <FooterContent>
                        <span>Contact us </span>
                        {/* <span> <i className="fas fa-mobile"></i></span> */}
                        <span><a href="mailto:hello@saharadigital.co.uk"><i className="far fa-envelope"></i></a> </span>
                    </FooterContent>
                    <FooterContent>
                        <span>Social Media</span>
                        <SocialMediaLinks>
                           <a href="https://twitter.com/Sahara__Digital" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> 
                           <a href="https://www.linkedin.com/company/saharadigital/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> 
                        </SocialMediaLinks>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
            <TermsAndPolicy>
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
    
    background-color: #2c353c;
    a{
        text-decoration: none;
        color: #9ccc;
    }
   
`;

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: #9ccc;
`;

const FooterContent = styled.span`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 1.5rem 0 0;
    padding: 2rem;
    text-align: left;
    .fa-envelope, .fa-mobile{
        font-size: 24px;
    }
    .fa-envelope{
     padding-right: 0.3rem;
    }
   
`;
const SocialMediaLinks = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 24px;
    .fa-linkedin{
        color:#0e76a8;
    }
    .fa-twitter{
        color: #1FA1F1;
    }
    .fa-twitter:hover{
        color: white;
    }
    .fa-linkedin:hover{

        color: white;
    }
`;

const TermsAndPolicy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    background-color: #2c353c;
    font-size: 14px;
`;
