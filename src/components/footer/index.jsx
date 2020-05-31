import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="qa-footer-container">
                <div className='qa-footer-something'>
                    <h4> Some Content</h4>
                </div>
                <div className="qa-footer-resources">
                    <h4> Get In Touch</h4>
                    <p className="qa-brand-details">Reach out so we can work together to drive more customers to your products and services.</p>
                    <span className="qa-contact-details">
                        contact@saharadigital.co.uk
                        <br/>
                        07591276702
                        <br/>
                        Address Line 1
                        <br/>
                        Address Line 2 <br/> Postcode
                    </span>
                </div>
                <div className="qa-footer-contact">
                    <h4>Follow us</h4>
                    <span>
                        <i class="fab fa-linkedin" />
                    </span>
                    <span>
                        <i class="fab fa-github-square" />
                    </span>
                    <span>
                        <i class="fab fa-twitter-square" />
                    </span>
                </div>

            </div>
            <div className="qa-copyright">
                &#169; 2020 Sahara Digital
            </div>
        </footer>
    )
}

export default Footer;