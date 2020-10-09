import React from 'react';
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
        <div>
            <hr />
            <p>&copy; 2020 - Valentina Aquino</p>
            <div className="socials" id="contact">
                <p>Hey, contact me and let's create awesome projects!</p>
                <Link to="/" className="socials__link" rel="external"><span className="fas fa-envelope"></span></Link>
                <Link to="/" className="socials__link" rel="external noopener noreferrer"><span className="fab fa-telegram"></span></Link>
                <Link to="/" className="socials__link" rel="external noopener noreferrer"><span className="fab fa-linkedin"></span></Link>
            </div>
            <p>Val Portfolio</p>
        </div>
    </footer>
    );
};

export default Footer;