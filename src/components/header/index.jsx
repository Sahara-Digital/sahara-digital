import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header className={`qa-company-header-container`}>
            <div className={`qa-company-header-wrapper`}>
                <h1 className={`qa-company-name`}>Sahara Digital</h1>
            </div>
            <div className={`qa-company-header-email`}>
            <span>
            contact@saharadigital.co.uk
            </span>
            </div>
            <div className={`qa-navigation-container`}>
                <Link to='/'>Home</Link>
                {/* <Link to='/1'>Clients</Link> */}
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link> 
            </div>
        </header>
    );
}

export default Header;