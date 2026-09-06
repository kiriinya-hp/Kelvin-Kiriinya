import React, { useState, useEffect } from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Real-time cycling highlight/ticker feature for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % skills.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
      transition: 'all 0.3s ease',
    }
  };

  return (
    <>
      <style>{`
        /* Hide mobile spotlight ticker by default on desktop */
        .mobile-skills-ticker {
          display: none;
        }

        @media (max-width: 768px) {
          .skills-desktop-grid {
            display: none !important;
          }
          .mobile-skills-ticker {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            min-height: 140px !important;
            padding: 1.5rem 1rem !important;
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%) !important;
            border: 1px solid #1e293b !important;
            border-radius: 1rem !important;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .ticker-title {
            font-size: 0.75rem !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            color: #f97316 !important;
            font-weight: 700 !important;
            margin-bottom: 0.75rem !important;
          }
          .ticker-item {
            font-size: 1.25rem !important;
            font-weight: 700 !important;
            color: #ffffff !important;
            transition: opacity 0.3s ease, transform 0.3s ease !important;
            letter-spacing: -0.01em !important;
          }
        }
      `}</style>

      <section id="skills" style={styles.section}>
        {/* Desktop Layout (Untouched) */}
        <div className="skills-desktop-grid" style={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.pill}>
              {skill}
            </div>
          ))}
        </div>

        {/* Professional Real-time Animated Mobile Layout */}
        <div className="mobile-skills-ticker">
          <div className="ticker-title">Core Expertise & Tech Stack</div>
          <div 
            className="ticker-item" 
            style={{ 
              opacity: fade ? 1 : 0, 
              transform: fade ? 'translateY(0)' : 'translateY(8px)' 
            }}
          >
            {skills[currentIndex]}
          </div>
        </div>
      </section>
    </>
  );
}