import React from 'react';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Github } from '../../assets/icons/github1.svg';

import './Contact.css';

function Contact() {
    let gmail = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jhonatandacosta0509@gmail.com&tf=1";
    let whatsapp = "https://api.whatsapp.com/send?phone=5511997111581";
  return (
    <div className="contact">
        <div className="contact__title">
            <p>Contact</p>
        </div>
        <div className="contacts">
            <div className="social_media">
                <p className="social_media__name">LINKEDIN</p>
                <a href="https://www.linkedin.com/in/jhonatan-da-costa/" target="_blank" className="social_media__icon">
                    <LinkedIn className="icon"/>
                </a>
            </div>
            <div className="social_media">
                <p className="social_media__name">GITHUB</p>
                <a href="https://www.github.com/JhonatanSK" target="_blank" className="social_media__icon">
                    <Github className="icon"/>
                </a>
            </div>
        </div>
            <p className="contact__message">
                If you want to send a message contact us via <a href={gmail} target="_blank">Gmail</a> or <a href={whatsapp} target="_blank">Whatsapp</a>
            </p>
    </div>
  );
}

export default Contact;