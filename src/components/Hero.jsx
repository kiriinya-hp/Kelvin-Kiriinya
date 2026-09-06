import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const styles = {
    hero: {
      minHeight: '100vh',
      backgroundColor: '#0b0f19',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 1.5rem',
      paddingTop: '7rem',
      paddingBottom: '4rem',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1100px',
      width: '100%',
      margin: '0 auto',
      flexWrap: 'wrap-reverse',
      gap: '3rem',
    },
    textSide: {
      flex: '1 1 500px',
      textAlign: 'left',
    },
    imageSide: {
      flex: '1 1 350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      gap: '1.5rem',
    },
    ringWrapper: {
      position: 'relative',
      width: '240px',
      height: '240px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    orangeRing: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      border: '2px solid #f97316',
      borderRadius: '50%',
      boxShadow: '0 0 25px rgba(249, 115, 22, 0.25)',
    },
    profileImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      backgroundColor: '#1e293b',
      zIndex: 1,
    },
    socialPills: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    socialLink: {
      backgroundColor: 'rgba(30, 41, 59, 0.7)',
      border: '1px solid #334155',
      color: '#cbd5e1',
      padding: '0.5rem 1rem',
      borderRadius: '2rem',
      fontSize: '0.85rem',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    },
    greeting: {
      fontSize: '1.25rem',
      color: '#94a3b8',
      fontWeight: '400',
      marginBottom: '0.25rem',
    },
    heading: {
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      fontWeight: '800',
      margin: '0 0 0.5rem 0',
      letterSpacing: '-0.02em',
    },
    nameHighlight: {
      color: '#ffffff',
    },
    title: {
      fontSize: '1.75rem',
      color: '#f97316',
      fontWeight: '700',
      marginBottom: '1.25rem',
    },
    bio: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.7',
      marginBottom: '2rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      boxShadow: '0 4px 14px rgba(249, 115, 22, 0.4)',
    },
    secondaryBtn: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      border: '1px solid #334155',
    }
  };

  return (
    <section id="about" style={styles.hero}>
      <div style={styles.contentWrapper}>
        <div style={styles.textSide}>
          <p style={styles.greeting}>Hello,</p>
          <h1 style={styles.heading}>
            I'm <span style={styles.nameHighlight}>{personalInfo.name}</span>
          </h1>
          <p style={styles.title}>{personalInfo.title}</p>
          <p style={styles.bio}>
            {personalInfo.bio} Student at {personalInfo.institution}[cite: 14].
          </p>
          
          <div style={styles.buttonContainer}>
            <a href="#projects" style={styles.primaryBtn}>Got a project?</a>
            <a href="#contact" style={styles.secondaryBtn}>Get in Touch</a>
          </div>
        </div>

        <div style={styles.imageSide}>
          <div style={styles.ringWrapper}>
            <div style={styles.orangeRing}></div>
            <img 
              src="kelvin.jpeg" 
              alt={personalInfo.name} 
              style={styles.profileImage}
            />
          </div>

          <div style={styles.socialPills}>
            <a href={`mailto:${personalInfo.email}`} style={styles.socialLink}>Email</a>
            <a href={`tel:${personalInfo.phone}`} style={styles.socialLink}>Call</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}