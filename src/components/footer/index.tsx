import React from 'react';
import styled from 'styled-components';
import { Image } from '../../components';
import { saharadigital } from '../../img';
import { StyledLink } from '../styled-link';
import media from 'styled-media-query';
import { customMedia } from '../../lib';

interface IProps {
    className?: string;
}
export const Footer: React.FunctionComponent<IProps> = ({
    className = 'footer',
}: IProps): JSX.Element => {
    return (
        <>
            <FooterContainer className={`${className}-container`}>
                <FooterWrapper className="footer-wrapper">
                    <FooterContent className={`${className}-company-info`}>
                        <Image
                            width="9rem"
                            img={saharadigital}
                            alt="Sahara Digital Logo"
                        />
                        <CompanyInfo>&copy; 2020 Sahara Digital.</CompanyInfo>
                        <CompanyInfo>Company no: 12636576.</CompanyInfo>
                    </FooterContent>

                    <FooterContent className="footer-navigation">
                        <h3>Navigation</h3>

                        <StyledLink
                            className="styled-link"
                            to={process.env.PUBLIC_URL + '/'}
                        >
                            Home
                        </StyledLink>
                        <StyledLink
                            className="styled-link"
                            to={process.env.PUBLIC_URL + '/about'}
                        >
                            About
                        </StyledLink>
                        {/* <StyledLink className="styled-link" to={process.env.PUBLIC_URL + "/services"}>
                            Services
                        </StyledLink>

                        <StyledLink className="styled-link" to={process.env.PUBLIC_URL + "/careers"}>
                            Careers
                        </StyledLink>
                        <StyledLink className="styled-link" to={process.env.PUBLIC_URL + "/team}>
                            Team
                        </StyledLink> */}
                        <StyledLink
                            className="styled-link"
                            to={process.env.PUBLIC_URL + '/contact'}
                        >
                            Contact
                        </StyledLink>
                    </FooterContent>
                    <FooterContent className="contact-us">
                        <h3>Contact us </h3>
                        <span>
                            <a href="mailto:hello@saharadigital.co.uk">
                                <i className="far fa-envelope"></i>
                            </a>
                        </span>
                    </FooterContent>
                    <FooterContent className="social-media-links-container">
                        <h3>Social Media</h3>
                        <SocialMediaLinks className="social-media-links">
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
                            <a
                                href="https://www.facebook.com/Saharadigitalleeds/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                        </SocialMediaLinks>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
            {/* <TermsAndPolicy className="terms-privacy-policy">
                <FooterLink className="styled-link" to={process.env.PUBLIC_URL + "/termsandconditions"}>
                    Terms and conditions
                </FooterLink>
                <FooterLink className="styled-link" to={process.env.PUBLIC_URL + "/privacypolicy"}>
                    Privacy policy
                </FooterLink>
            </TermsAndPolicy> */}
        </>
    );
};

// const FooterLink = styled(StyledLink)`
//     padding: 0.5rem 0.5rem;
//     ${({ theme }) => `font-size:${theme.fontsize.medium}`};
//     .styled-link:hover {
//         ${({ theme }) => `color:${theme.colors.white}`};
//     }
// `;
// FooterLink.displayName = 'FooterLink';

const CompanyInfo = styled.span`
    ${({ theme }) => `font-size:${theme.fontsize.medium}`};
`;
CompanyInfo.displayName = 'CompanyInfo';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    ${({ theme }) => `background-color :${theme.colors.footer.primary}`};
    a {
        text-decoration: none;
        ${({ theme }) => `color :${theme.colors.brand.primary}`};
    }
    h3 {
        ${({ theme }) => `color :${theme.colors.white}`};
    }
    padding: 1.5rem 0rem;
    @media (max-width: 568px) and (min-width: 320px) {
        margin: 0;
        span {
            ${({ theme }) => `font-size:${theme.fontsize.small}`};
        }
    }
`;
FooterContainer.displayName = 'FooterContainer';

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

    @media (max-width: 568px) and (min-width: 320px) {
        margin: 0;
        padding: 0.5rem;
        display: block;
    }
`;
FooterWrapper.displayName = 'FooterWrapper';

const FooterContent = styled.span`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 1.5rem 0 0;
    padding: 2rem;
    text-align: left;
    .fa-envelope {
        ${({ theme }) => `font-size:${theme.fontsize.large}`};
        padding-right: 0.3rem;
    }
    .fa-envelope:hover {
        border-bottom: 2px solid white;
    }
    .styled-link:hover {
        ${({ theme }) => `color:${theme.colors.white}`};
    }
    ${customMedia.lessThan('mobile')`
       padding: 1rem 1rem;
       margin: 0;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       h3 {
        ${({ theme }) => `font-size:${theme.fontsize.medium}`};
       }
    `}

    ${media.between(`small`, `medium`)`
            padding: 0.5rem;
            a {
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
           }
           h3{
            ${({ theme }) => `font-size:${theme.fontsize.medium}`};  
           }
    
      `}
     ${media.between(`small`, `medium`)`
            margin: 1rem 1rem 0 0;
            a {
            ${({ theme }) => `font-size:${theme.fontsize.medium}`};
           }
        .fa-linkedin, .fa-twitter, .fa-facebook {
            ${({ theme }) => `font-size:${theme.fontsize.regular}`};
        }
    
      `}
      ${media.between(`medium`, `large`)`
            padding: 0.5rem;
            a {
            ${({ theme }) => `font-size:${theme.fontsize.medium}`};
           }
           h3{
            ${({ theme }) => `font-size:${theme.fontsize.medium}`};  
           }
    
        .fa-linkedin, .fa-twitter, .fa-facebook {
            ${({ theme }) => `font-size:${theme.fontsize.regular}`};
        }
    
      `}
      @media (max-width: 568px) and (min-width: 320px) {
        margin: 0;
        padding: 0.5rem;
        span {
            margin: 0;
        }
    }
`;
FooterContent.displayName = 'FooterContent';

const SocialMediaLinks = styled.span`
    display: flex;
    flex-direction: row;

    font-size: ${({ theme }) => `${theme.fontsize.large}`};
    .fa-linkedin {
        ${({ theme }) => `color:${theme.colors.footer.linkedIn}`};
    }
    .fa-twitter {
        ${({ theme }) => `color:${theme.colors.footer.twitter}`};
    }
    .fa-facebook {
        ${({ theme }) => `color: ${theme.colors.footer.facebook}`};
    }
    .fa-twitter:hover,
    .fa-linkedin:hover,
    .fa-facebook:hover {
        ${({ theme }) => `color:${theme.colors.white}`};
    }

    ${media.lessThan('small')` 
        margin: 0;
        flex-direction: row;
        justify-content: center;
        .fa-linkedin, .fa-twitter, .fa-facebook{
            ${({ theme }) => `font-size:${theme.fontsize.large}`}; 
        }
    `}
    ${customMedia.between(`regular`, `medium`)`
           a {
            ${({ theme }) => `font-size:${theme.fontsize.regular}`};
           }
      `}
`;

SocialMediaLinks.displayName = 'SocialMediaLinks';

// const TermsAndPolicy = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     text-align: center;
//     ${({ theme }) => `background-color :${theme.colors.footer.primary}`};
//     ${({ theme }) => `font-size:${theme.fontsize.medium}`};
//     ${media.lessThan('small')`
//         margin: 0;
//         a {
//             ${({ theme }) => `font-size:${theme.fontsize.small}`};
//         }
//     `}
//     ${customMedia.between(`regular`, `medium`)`
//            a {
//             ${({ theme }) => `font-size:${theme.fontsize.small}`};
//            }
//       `}
// `;
// TermsAndPolicy.displayName = 'TermsAndPolicy';
