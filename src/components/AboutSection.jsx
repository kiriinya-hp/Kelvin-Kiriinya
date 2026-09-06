import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  const styles = {
    section: {
      padding: '6rem 1.5rem',
      backgroundColor: '#070a12',
      color: '#ffffff',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: '800',
      marginBottom: '1.25rem',
      background: 'linear-gradient(to right, #ffffff, #94a3b8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    text: {
      color: '#94a3b8',
      fontSize: '1rem',
      lineHeight: '1.7',
      maxWidth: '750px',
      marginBottom: '1rem',
    },
    experienceBox: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
      border: '1px solid #1e293b',
      borderRadius: '1rem',
      padding: '2rem',
      marginTop: '1.5rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(8px)',
    },
    expHeader: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '0.75rem',
      gap: '0.5rem',
    },
    expTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#ffffff',
    },
    expCompany: {
      color: '#f97316',
      fontWeight: '600',
      fontSize: '1rem',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      padding: '0.25rem 0.75rem',
      borderRadius: '2rem',
      border: '1px solid rgba(249, 115, 22, 0.2)',
    },
    expDesc: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.6',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.5rem',
      marginTop: '1rem',
    },
    statCard: {
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      padding: '1.75rem 1.5rem',
      borderRadius: '0.75rem',
      textAlign: 'center',
      transition: 'transform 0.2s ease, border-color 0.2s ease',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#f97316',
      marginBottom: '0.35rem',
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#94a3b8',
      fontWeight: '500',
    }
  };

  return (
    <section id="about-me" style={styles.section}>
      <div style={styles.container}>
        <div>
          <h2 style={styles.heading}>About me</h2>
          <p style={styles.text}>
            {personalInfo.bio} Student at {personalInfo.institution}[cite: 6, 9].
          </p>
          <p style={styles.text}>
            I started my journey into tech with a strong drive for learning how systems work from scratch. Since then, this has evolved into full-stack development and hands-on ICT support, satisfying my passion for learning and building things.
          </p>
          
          <div style={styles.experienceBox}>
            <div style={styles.expHeader}>
              <h3 style={styles.expTitle}>ICT Support & Industrial Attachment</h3>
              <span style={styles.expCompany}>Afya Sacco Ltd</span>
            </div>
            <p style={styles.expDesc}>
              Gained practical industry experience within the ICT Department, handling hardware maintenance, local area network (LAN) routing, IP configurations, and digital system records.
            </p>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>120+</div>
            <div style={styles.statLabel}>Completed Projects</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>95%</div>
            <div style={styles.statLabel}>Client satisfaction</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>2+</div>
            <div style={styles.statLabel}>Years of experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}