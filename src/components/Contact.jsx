import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const styles = {
    section: {
      padding: '5rem 2rem',
      backgroundColor: '#0b0f19',
      color: '#ffffff',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    subText: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      maxWidth: '500px',
      margin: '0 auto 2rem auto',
      lineHeight: '1.5',
    },
    emailButton: {
      display: 'inline-block',
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '0.75rem 2rem',
      borderRadius: '0.375rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      boxShadow: '0 4px 14px rgba(249, 115, 22, 0.4)',
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contacts</h2>
      <p style={styles.subText}>
        I'm currently looking for new opportunities or collaborations. Get in touch with me directly!
      </p>
      <a href={`mailto:${personalInfo.email}`} style={styles.emailButton}>
        Say Hello
      </a>
    </section>
  );
}