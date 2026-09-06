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
      padding: '0 1.5rem',
      paddingTop: '8rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden',
    },
    glowOrbTop: {
      position: 'absolute',
      top: '15%',
      left: '10%',
      width: '350px',
      height: '350px',
      background: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(11, 15, 25, 0) 70%)',
      zIndex: 0,
      pointerEvents: 'none',
    },
    glowOrbBottom: {
      position: 'absolute',
      bottom: '10%',
      right: '10%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(11, 15, 25, 0) 70%)',
      zIndex: 0,
      pointerEvents: 'none',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1150px',
      width: '100%',
      margin: '0 auto',
      flexWrap: 'wrap-reverse',
      gap: '4rem',
      zIndex: 1,
    },
    textSide: {
      flex: '1 1 520px',
      textAlign: 'left',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      color: '#f97316',
      padding: '0.35rem 1rem',
      borderRadius: '2rem',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      letterSpacing: '0.02em',
    },
    badgeDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      boxShadow: '0 0 8px #25D366',
    },
    heading: {
      fontSize: 'clamp(2.75rem, 5vw, 4rem)',
      fontWeight: '800',
      margin: '0 0 0.5rem 0',
      letterSpacing: '-0.03em',
      lineHeight: '1.1',
    },
    nameHighlight: {
      background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    title: {
      fontSize: '1.65rem',
      fontWeight: '700',
      background: 'linear-gradient(to right, #f97316, #fb923c)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1.25rem',
    },
    bio: {
      color: '#94a3b8',
      fontSize: '1.05rem',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      maxWidth: '540px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '0.875rem 2rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.95rem',
      boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.4)',
      transition: 'all 0.3s ease',
    },
    secondaryBtn: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      color: '#ffffff',
      padding: '0.875rem 2rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.95rem',
      border: '1px solid #334155',
      backdropFilter: 'blur(8px)',
      transition: 'all 0.3s ease',
    },
    imageSide: {
      flex: '1 1 350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      gap: '2rem',
    },
    ringWrapper: {
      position: 'relative',
      width: '270px',
      height: '270px',
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
      boxShadow: '0 0 35px rgba(249, 115, 22, 0.2)',
      animation: 'pulse 3s infinite ease-in-out',
    },
    profileImage: {
      width: '230px',
      height: '230px',
      borderRadius: '50%',
      objectFit: 'cover',
      backgroundColor: '#1e293b',
      border: '4px solid rgba(30, 41, 59, 0.8)',
      zIndex: 1,
      boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.5)',
    },
    socialPills: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    socialLink: {
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid #1e293b',
      color: '#cbd5e1',
      padding: '0.6rem 1.25rem',
      borderRadius: '2rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.2s ease',
    },
  };

  return (
    <section id="about" style={styles.hero}>
      {/* Background ambient lighting effects */}
      <div style={styles.glowOrbTop}></div>
      <div style={styles.glowOrbBottom}></div>

      <div style={styles.contentWrapper}>
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
            {personalInfo.bio} Student at {personalInfo.institution}. Crafting exceptional, secure, and scalable digital experiences from code to cloud.
          </p>
          
          <div style={styles.buttonContainer}>
            <a href="#projects" style={styles.primaryBtn}>Explore Projects</a>
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