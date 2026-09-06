import React from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const styles = {
    section: {
      padding: '5rem 2rem',
      backgroundColor: '#070a12',
      color: '#ffffff',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '2.5rem',
      maxWidth: '1000px',
      margin: '0 auto 2.5rem auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '0.75rem',
    },
    description: {
      color: '#94a3b8',
      fontSize: '0.9rem',
      lineHeight: '1.5',
      marginBottom: '1.5rem',
    },
    techContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    techBadge: {
      backgroundColor: '#1e293b',
      color: '#f97316',
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
    },
    linkContainer: {
      display: 'flex',
      gap: '1rem',
    },
    link: {
      color: '#ffffff',
      backgroundColor: '#f97316',
      textDecoration: 'none',
      fontSize: '0.85rem',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      fontWeight: '500',
    }
  };

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>
            <div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.techContainer}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} style={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
            <div style={styles.linkContainer}>
              <a href={project.liveLink} style={styles.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubLink} style={{ ...styles.link, backgroundColor: '#1e293b', border: '1px solid #334155' }} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}