import React from "react";
import '../styles/Footer.css';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Youtube from '../assets/youtube.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>Sobre</h2>
                        <p>ParticIn ©</p>
                    </div>
                    <div className="footer-section contact">
                        <h2>Entre em contato</h2>
                        <p>Email: info@particin.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    <div className="footer-section links">
                        
                        <div className="footer-images">
                            <a href="/home"><img src={Instagram} alt="Instagram" /></a>
                            <a href="/about"><img src={Facebook} alt="Facebook" /></a>
                            <a href="/services"><img src={Youtube} alt="Youtube" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
