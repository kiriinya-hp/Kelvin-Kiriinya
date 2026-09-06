import React from 'react';

export default function AboutSection() {
  const styles = {
    section: {
      padding: '5rem 2rem',
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
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    text: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.7',
      maxWidth: '700px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '2rem',
      marginTop: '1rem',
    },
    statCard: {
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      padding: '1.5rem',
      borderRadius: '0.5rem',
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '800',
      color: '#f97316',
      marginBottom: '0.25rem',
    },
    statLabel: {
      fontSize: '0.85rem',
      color: '#94a3b8',
    }
  };

  return (
    <section id="about-me" style={styles.section}>
      <div style={styles.container}>
        <div>
          <h2 style={styles.heading}>About me</h2>
          <p style={styles.text}>
            I started my journey into tech with a strong drive for learning how systems work from scratch. Since then, this has evolved into full-stack development, satisfying my passion for learning and building things.
          </p>
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