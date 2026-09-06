import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  const styles = {
    section: {
      padding: '7rem 1.5rem',
      backgroundColor: '#070a12',
      color: '#ffffff',
      position: 'relative',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '3.5rem',
    },
    headerWrapper: {
      borderLeft: '4px solid #f97316',
      paddingLeft: '1.25rem',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '800',
      letterSpacing: '-0.02em',
      background: 'linear-gradient(to right, #ffffff, #94a3b8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#f97316',
      fontWeight: '600',
      marginTop: '0.25rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2.5rem',
      alignItems: 'start',
    },
    bioColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    text: {
      color: '#94a3b8',
      fontSize: '1rem',
      lineHeight: '1.8',
    },
    experienceColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    experienceCard: {
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
      border: '1px solid #1e293b',
      borderRadius: '1rem',
      padding: '1.75rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      marginBottom: '1rem',
    },
    expTopRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '0.5rem',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    expTitle: {
      fontSize: '1.15rem',
      fontWeight: '700',
      color: '#ffffff',
    },
    expBadge: {
      backgroundColor: 'rgba(249, 115, 22, 0.15)',
      color: '#f97316',
      fontSize: '0.8rem',
      fontWeight: '600',
      padding: '0.3rem 0.75rem',
      borderRadius: '2rem',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      whiteSpace: 'nowrap',
    },
    expPeriod: {
      fontSize: '0.85rem',
      color: '#94a3b8',
      marginBottom: '0.75rem',
      fontWeight: '500',
    },
    expDesc: {
      color: '#94a3b8',
      fontSize: '0.9rem',
      lineHeight: '1.6',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
    },
    statCard: {
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      padding: '1.75rem',
      borderRadius: '0.875rem',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#f97316',
      marginBottom: '0.25rem',
      letterSpacing: '-0.02em',
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#94a3b8',
      fontWeight: '500',
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .about-section {
            padding: 4rem 1rem !important;
          }
          .about-header-wrapper {
            padding-left: 1rem !important;
          }
          .about-heading {
            font-size: 2rem !important;
          }
          .about-content-grid {
            gap: 2rem !important;
          }
          .about-experience-card {
            padding: 1.25rem !important;
          }
          .about-stat-card {
            padding: 1.25rem !important;
          }
          .about-stat-number {
            font-size: 2rem !important;
          }
        }
      `}</style>

      <section id="about-me" className="about-section" style={styles.section}>
        <div style={styles.container}>
          
          {/* Section Heading */}
          <div className="about-header-wrapper" style={styles.headerWrapper}>
            <div style={styles.subtitle}>System Architecture & Background</div>
            <h2 className="about-heading" style={styles.heading}>About Me</h2>
          </div>

          {/* Main Split Grid (Bio & Professional Experience) */}
          <div className="about-content-grid" style={styles.contentGrid}>
            
            {/* Bio Side */}
            <div style={styles.bioColumn}>
              <p style={styles.text}>
                {personalInfo.bio} Student at {personalInfo.institution}.
              </p>
              <p style={styles.text}>
                I started my journey into tech with a strong drive for learning how systems work from scratch. Since then, this has evolved into full-stack development and hands-on ICT support, fueling my dedication to engineering clean, reliable solutions.
              </p>
            </div>

            {/* Experience Side (Dynamically mapped from portfolioData) */}
            <div style={styles.experienceColumn}>
              {personalInfo.experience && personalInfo.experience.map((item, index) => (
                <div key={index} className="about-experience-card" style={styles.experienceCard}>
                  <div style={styles.expTopRow}>
                    <h3 style={styles.expTitle}>{item.role}</h3>
                    <span style={styles.expBadge}>{item.company}</span>
                  </div>
                  <div style={styles.expPeriod}>{item.period}</div>
                  <p style={styles.expDesc}>{item.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Stats Grid */}
          <div style={styles.statsContainer}>
            <div className="about-stat-card" style={styles.statCard}>
              <div className="about-stat-number" style={styles.statNumber}>120+</div>
              <div style={styles.statLabel}>Completed Projects</div>
            </div>
            <div className="about-stat-card" style={styles.statCard}>
              <div className="about-stat-number" style={styles.statNumber}>95%</div>
              <div style={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className="about-stat-card" style={styles.statCard}>
              <div className="about-stat-number" style={styles.statNumber}>2+</div>
              <div style={styles.statLabel}>Years of Experience</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}