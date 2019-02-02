import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h1 className="footer-title" >Get in touch with the Developer</h1>
                <div className="footer-logos">
                    <div className="footer-github">
                    </div>
                    <a href={"https://github.com/dmyasnyankin/"}>
                        <button className="footer-github"><i className="fab fa-github"></i></button>
                    </a>
                    <a href={"https://www.linkedin.com/in/dennis-myasnyankin/"}>
                        <button className="footer-linkedin"><i className="fab fa-linkedin"></i></button>
                    </a>
                    <a href={"https://angel.co/dennis-myasnyankin?public_profile=1"}>
                        <button className="footer-angel"><i className="fab fa-angellist"></i></button>
                    </a>
                    <a href="mailto:dmyasnyankin@berkeley.edu">
                        <button className="footer-email"><i className="far fa-envelope"></i></button>
                    </a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;