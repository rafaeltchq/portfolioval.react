import React from 'react';
import "./footer.scss";
const Footer = () => {
    const contactLinks = {
        email: "mailto:val.aquinoch@gmail.com",
        telegram: "https://t.me/valentinaquino",
        linkedIn: "https://www.linkedin.com/in/valaquino/",
    };
    return (
        <footer>
        <div>
            <hr />
            <p>&copy; 2020 - Valentina Aquino</p>
            <div className="socials" id="contact">
                <p>Hey, contact me and let's create awesome projects!</p>
                <a href={contactLinks.email} className="socials__link" title="Send me an email!" rel="external" ><span className="fas fa-envelope"></span></a>
                <a href={contactLinks.telegram} className="socials__link" title="Messaging by Telegram" rel="external noopener noreferrer"><span className="fab fa-telegram"></span></a>
                <a href={contactLinks.linkedIn} className="socials__link" title="Check out my linkedIn profile!" rel="external noopener noreferrer"><span className="fab fa-linkedin"></span></a>
            </div>
            <p>Val Portfolio</p>
        </div>
    </footer>
    );
};

export default Footer;