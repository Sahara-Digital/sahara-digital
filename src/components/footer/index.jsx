import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="qa-footer-container">
                <div className='qa-footer-something'>
                    <h4> Site Map</h4>
                </div>
                <div className="qa-footer-resources">
                    <h4> Get In Touch</h4>
                    <p className="qa-brand-details">Reach out so we can work together to drive more customers to your products and services.</p>
                    <div className="qa-contact-details">
                       <span>contact@saharadigital.co.uk</span>
                        <span>07591276702</span>
                    </div>
                </div>
                <div className="qa-footer-contact">
                    <h4>Follow us</h4>
                    <span>
                        <i className="fab fa-linkedin" />
                    </span>
                    <span>
                        <i className="fab fa-github-square" />
                    </span>
                    <span>
                        <i className="fab fa-twitter-square" />
                    </span>
                </div>

            </div>
            <div className="qa-copyright">
                <span className="qa-comany-name">
                    &#169; 2020 Sahara Digital
                </span>
                <span> 
                    Company no. 12636576
                </span>
            </div>
        </footer>
    )
}

export default Footer;