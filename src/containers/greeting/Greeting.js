import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import {greeting, socialMediaLinks} from "../../portfolio";
import {useTypewriter} from "../../hooks/useTypewriter";
import profilePic from "../../assets/images/Mad2.png";

export default function Greeting() {
  const typeWriterText = useTypewriter([
    "Node.js Expert",
    "AWS Cloud Specialist",
    "Serverless Architect",
    "Backend Developer"
  ]);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="hero-bg-text">DEV</div>
        <div className="hero-orb">
          <img src={profilePic} alt="Madhesh" className="hero-profile-img" />
        </div>

        <div className="hero-tag">Backend Developer & AWS Cloud Architect</div>

        <h1 className="greeting-text">
          Madhesh
          <span>Duraisamy</span>
        </h1>

        <p className="greeting-text-p">
          &gt;&nbsp;<span className="cursor-text">{typeWriterText}</span>
        </p>

        <p className="hero-desc">
          Passionate about building scalable, serverless backend systems on AWS.
          Specializing in Node.js architecture, cloud infrastructure, and
          database design that powers real products.
        </p>

        <div className="button-greeting-div">
          <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <i className="fas fa-eye"></i> View Resume
          </a>
          <a href="#projects" className="btn-ghost">
            <i className="fas fa-code"></i> View Projects
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(socialMediaLinks.gmail)}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <i className="fas fa-envelope"></i> Get in Touch
          </a>
        </div>

        <div className="hero-socials">
          <style>{`
            .hero-socials {
              margin-top: 3.5rem;
              display: flex;
              gap: 1.25rem;
              align-items: center;
              position: relative;
              z-index: 1;
            }
            .hero-socials::before {
              content: '';
              width: 40px;
              height: 1px;
              background: #475569;
            }
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
            .btn-primary {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.8rem 1.8rem;
              font-size: 0.9rem;
              font-weight: 600;
              background: linear-gradient(135deg, #00e5ff 0%, #00bcd4 100%);
              color: #060910;
              border: none;
              border-radius: 3px;
              text-decoration: none;
              transition: transform 0.2s, box-shadow 0.2s;
              letter-spacing: 0.03em;
            }
            .btn-primary:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(0, 229, 255, 0.35);
            }
            .btn-ghost {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.8rem 1.8rem;
              font-size: 0.9rem;
              font-weight: 500;
              background: transparent;
              color: #e2e8f0;
              border: 1px solid rgba(0, 229, 255, 0.25);
              border-radius: 3px;
              text-decoration: none;
              transition: all 0.2s;
              letter-spacing: 0.03em;
            }
            .btn-ghost:hover {
              border-color: #00e5ff;
              color: #00e5ff;
              background: rgba(0, 229, 255, 0.05);
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

        <div className="scroll-indicator">
          <div className="mouse-icon"></div>
          Scroll
        </div>
      </div>
    </Fade>
  );
}
