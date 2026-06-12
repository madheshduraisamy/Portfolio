import React from "react";
import "./Project.scss";
import {bigProjects, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Projects() {
  if (!bigProjects.display) {
    return null;
  }
  return (
    <section id="projects">
      <div className="section-label">03 — Projects</div>
      <Fade bottom duration={1000}>
        <h2 className="section-title">Things I've Built</h2>
      </Fade>

      <div className="projects-grid">
        {bigProjects.projects.map((project, i) => (
          <Fade bottom duration={1200} distance="20px" key={i}>
            <div className="project-card">
              <span className="project-corner">Project</span>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="project-img"
                />
              ) : (
                <div className="project-img-placeholder">🚀</div>
              )}
              <div className="project-body">
                <div className="project-num">0{i + 1} / {project.projectName}</div>
                <div className="project-name">{project.projectName}</div>
                <p className="project-desc">{project.projectDesc}</p>
                {project.footerLink ? (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-tag"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <div style={{textAlign: 'center', marginTop: '2.5rem'}}>
        <Fade bottom duration={1400}>
          <a
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.8rem',
              fontSize: '0.9rem',
              fontWeight: 500,
              background: 'transparent',
              color: '#e2e8f0',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              borderRadius: '3px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              letterSpacing: '0.03em'
            }}
          >
            <i className="fab fa-github"></i> View all on GitHub
          </a>
        </Fade>
      </div>
    </section>
  );
}
