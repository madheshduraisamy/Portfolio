import React from "react";
import "./Contact.scss";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">05 — Contact</div>

      <div className="contact-wrapper">
        <Fade bottom duration={1000}>
          <h2 className="section-title">Let's Build Something</h2>
        </Fade>
        
        <Fade bottom duration={1200} distance="20px">
          <p>
            Discuss a project, backend architecture, or just want to say hi? My
            inbox is open. I'm currently working at Pitfall and selectively
            available for interesting challenges.
          </p>

          <div style={{marginBottom: "1.5rem"}}>
            <span className="avail-badge">
              Currently looking for new opportunities
            </span>
          </div>

          <div className="contact-details">
            {contactInfo.number && (
              <a href={`tel:${contactInfo.number}`} className="contact-item">
                <i className="fas fa-phone"></i> {contactInfo.number}
              </a>
            )}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email_address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <i className="fas fa-envelope"></i> {contactInfo.email_address}
            </a>
          </div>

          <div className="contact-socials">
            <style>{`
              .social-icon {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(0, 229, 255, 0.12);
                color: #94a3b8;
                font-size: 0.9rem;
                text-decoration: none;
                transition: all 0.2s;
              }
              .social-icon:hover {
                border-color: #00e5ff;
                color: #00e5ff;
                background: rgba(0, 229, 255, 0.08);
                transform: translateY(-2px);
              }
            `}</style>
            <a
              href={socialMediaLinks.github}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={socialMediaLinks.linkedin}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${socialMediaLinks.gmail}`} className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
