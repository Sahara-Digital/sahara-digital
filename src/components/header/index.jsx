import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header className={`qa-company-header-container`}>
            <div className={`qa-company-header-wrapper`}>
                <h1 className={`qa-company-name`}>Sahara Digital</h1>
            </div>
            <div className={`qa-navigation-container`}>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/events'>EVENTS</Link>
                <Link to='/contact'>CONTACT</Link> 
            </div>
        </header>
    );
}

export default Header;