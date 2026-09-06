import React, { useState, useEffect } from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Real-time cycling highlight/ticker feature for mobile and desktop views
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % skills.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills.length]);

  const styles = {
    section: {
      padding: '5rem 2rem',
      backgroundColor: '#0b0f19',
      color: '#ffffff',
      textAlign: 'center',
    },
    wrapper: {
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
    },
    heading: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#f97316',
      fontWeight: '700',
      marginBottom: '1.5rem',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
    },
    pill: {
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      padding: '0.6rem 1.5rem',
      borderRadius: '2rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      color: '#94a3b8',
      transition: 'all 0.3s ease',
    },
    tickerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '130px',
      padding: '1.5rem 1rem',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%)',
      border: '1px solid #1e293b',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
      position: 'relative',
      overflow: 'hidden',
    },
    tickerItem: {
      fontSize: '1.35rem',
      fontWeight: '700',
      color: '#ffffff',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      letterSpacing: '-0.01em',
    }
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.wrapper}>
        
        {/* 1. List of all skills BEFORE the translation/ticker */}
        <div>
          <div style={styles.heading}>Full Skill Inventory</div>
          <div style={styles.grid}>
            {skills.map((skill, index) => (
              <div key={`pre-${index}`} style={styles.pill}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Real-time translation/ticker running across both mobile and big screens */}
        <div style={styles.tickerContainer}>
          <div style={{ ...styles.heading, marginBottom: '0.75rem' }}>Live Skill Spotlight</div>
          <div 
            style={{ 
              ...styles.tickerItem, 
              opacity: fade ? 1 : 0, 
              transform: fade ? 'translateY(0)' : 'translateY(8px)' 
            }}
          >
            {skills[currentIndex]}
          </div>
        </div>

        {/* 3. List of all skills AFTER the translation/ticker */}
        <div>
          <div style={styles.heading}>Complete Tech Stack</div>
          <div style={styles.grid}>
            {skills.map((skill, index) => (
              <div key={`post-${index}`} style={styles.pill}>
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}