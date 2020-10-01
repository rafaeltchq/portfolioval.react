import React from 'react';
import "./footer.scss";
import { Link } from "wouter";
const Footer = () => {
    return (
        <footer>
        <div>
            <hr />
            <p>&copy; 2020 - Valentina Aquino</p>
            <div className="socials" id="contact">
                <p>Hey, contact me and let's create awesome projects!</p>
                <Link to="/" rel="external"><span className="socials__link fas fa-envelope"></span></Link>
                <Link to="/" rel="external noopener noreferrer"><span className="socials__link fab fa-telegram"></span></Link>
                <Link to="/" rel="external noopener noreferrer"><span className="socials__link fab fa-linkedin"></span></Link>
            </div>
            <p>Val Portfolio</p>
        </div>
    </footer>
    );
};

export default Footer;