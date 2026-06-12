import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import {contactInfo} from "../../portfolio";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div">
        <span>Built with precision &amp; purpose</span>
        <span>Madhesh Duraisamy · 2026</span>
        
        <span style={{color: '#00e5ff'}}>{contactInfo.email_address}</span>
      </footer>
    </Fade>
  );
}
