import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const styles = {
    hero: {
      minHeight: '100vh',
      backgroundColor: '#070a12',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '6rem 1.25rem 4rem 1.25rem',
      position: 'relative',
      overflow: 'hidden',
    },
    glowOrbTop: {
      position: 'absolute',
      top: '10%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '280px',
      height: '280px',
      background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(11, 15, 25, 0) 70%)',
      zIndex: 0,
      pointerEvents: 'none',
    },
    glowOrbBottom: {
      position: 'absolute',
      bottom: '5%',
      right: '5%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(11, 15, 25, 0) 70%)',
      zIndex: 0,
      pointerEvents: 'none',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '1100px',
      width: '100%',
      margin: '0 auto',
      gap: '2.5rem',
      zIndex: 1,
    },
    imageSide: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      gap: '1.5rem',
      width: '100%',
    },
    ringWrapper: {
      position: 'relative',
      width: '210px',
      height: '210px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    orangeRing: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(59, 130, 246, 0.2))',
      borderRadius: '50%',
      padding: '2px',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      boxShadow: '0 0 30px rgba(249, 115, 22, 0.25)',
    },
    profileImage: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      objectFit: 'cover',
      backgroundColor: '#1e293b',
      border: '4px solid rgba(30, 41, 59, 0.8)',
      zIndex: 1,
      boxShadow: '0 15px 25px -10px rgba(0, 0, 0, 0.6)',
    },
    socialPills: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '360px',
    },
    socialLink: {
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      border: '1px solid #1e293b',
      color: '#cbd5e1',
      padding: '0.5rem 0.9rem',
      borderRadius: '2rem',
      fontSize: '0.8rem',
      fontWeight: '500',
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
    textSide: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
      maxWidth: '650px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      color: '#f97316',
      padding: '0.3rem 0.85rem',
      borderRadius: '2rem',
      fontSize: '0.78rem',
      fontWeight: '600',
      marginBottom: '1.25rem',
      letterSpacing: '0.02em',
    },
    badgeDot: {
      width: '7px',
      height: '7px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      boxShadow: '0 0 8px #25D366',
    },
    heading: {
      fontSize: 'clamp(2.25rem, 7vw, 3.75rem)',
      fontWeight: '800',
      margin: '0 0 0.4rem 0',
      letterSpacing: '-0.03em',
      lineHeight: '1.15',
    },
    nameHighlight: {
      background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    title: {
      fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
      fontWeight: '700',
      background: 'linear-gradient(to right, #f97316, #fb923c)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
    },
    bio: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.7',
      marginBottom: '2rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '0.85rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
    },
    primaryBtn: {
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '0.8rem 1.75rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.4)',
      flex: '1 1 140px',
      maxWidth: '200px',
    },
    secondaryBtn: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      color: '#ffffff',
      padding: '0.8rem 1.75rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      border: '1px solid #334155',
      backdropFilter: 'blur(8px)',
      flex: '1 1 140px',
      maxWidth: '200px',
    }
  };

  return (
    <section id="about" style={styles.hero}>
      {/* Background ambient lighting effects */}
      <div style={styles.glowOrbTop}></div>
      <div style={styles.glowOrbBottom}></div>

      <div style={styles.contentWrapper}>
        {/* Profile Image & Quick Links Moved to Top for Mobile-First Flow */}
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

        {/* Text and Bio Details Stacked Below */}
        <div style={styles.textSide}>
          <div style={styles.badge}>
            <span style={styles.badgeDot}></span>
            Available for Opportunities & Projects
          </div>
          
          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.nameHighlight}>{personalInfo.name}</span>
          </h1>
          <p style={styles.title}>{personalInfo.title}</p>
          <p style={styles.bio}>
            {personalInfo.bio} Student at {personalInfo.institution}[cite: 14]. Crafting exceptional, secure, and scalable digital experiences from code to cloud.
          </p>
          
          <div style={styles.buttonContainer}>
            <a href="#projects" style={styles.primaryBtn}>Explore Projects</a>
            <a href="#contact" style={styles.secondaryBtn}>Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}