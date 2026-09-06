import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const styles = {
    section: {
      padding: '4rem 2rem',
      backgroundColor: '#0b0f19',
      color: '#ffffff',
      textAlign: 'center',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    pill: {
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      padding: '0.6rem 1.5rem',
      borderRadius: '2rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      color: '#94a3b8',
    }
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.pill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}