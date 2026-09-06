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
        /* Hide mobile-specific layout wrapper by default on desktop */
        .mobile-stats-stack {
          display: none;
        }

        @media (max-width: 900px) {
          .about-section {
            padding: 3.5rem 1rem !important;
          }
          .about-container {
            gap: 2rem !important;
          }
          .about-header-wrapper {
            border-left-width: 3px !important;
            padding-left: 0.85rem !important;
          }
          .about-subtitle {
            font-size: 0.8rem !important;
            letter-spacing: 0.03em !important;
          }
          .about-heading {
            font-size: 1.75rem !important;
            line-height: 1.2 !important;
          }
          .about-content-grid {
            gap: 1.5rem !important;
          }
          .about-text {
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
          .about-experience-card {
            padding: 1.15rem !important;
            borderRadius: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
          .about-exp-title {
            font-size: 1rem !important;
          }
          .about-exp-badge {
            font-size: 0.7rem !important;
            padding: 0.2rem 0.5rem !important;
          }
          .about-exp-period {
            font-size: 0.75rem !important;
            margin-bottom: 0.5rem !important;
          }
          .about-exp-desc {
            font-size: 0.85rem !important;
          }

          /* Hide original desktop stats grid on mobile */
          .desktop-stats-grid {
            display: none !important;
          }

          /* Completely modified vertical layout for stats on mobile */
          .mobile-stats-stack {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.75rem !important;
            width: 100% !important;
          }
          .mobile-stat-row {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%) !important;
            border: 1px solid #1e293b !important;
            padding: 1rem 1.25rem !important;
            borderRadius: 0.75rem !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
          }
          .mobile-stat-label {
            font-size: 0.85rem !important;
            color: #94a3b8 !important;
            font-weight: 600 !important;
            text-align: left !important;
          }
          .mobile-stat-value {
            font-size: 1.35rem !important;
            font-weight: 800 !important;
            color: #f97316 !important;
            letter-spacing: -0.01em !important;
          }
        }
      `}</style>

      <section id="about-me" className="about-section" style={styles.section}>
        <div className="about-container" style={styles.container}>
          
          {/* Section Heading */}
          <div className="about-header-wrapper" style={styles.headerWrapper}>
            <div className="about-subtitle" style={styles.subtitle}>System Architecture & Background</div>
            <h2 className="about-heading" style={styles.heading}>About Me</h2>
          </div>

          {/* Main Split Grid (Bio & Professional Experience) */}
          <div className="about-content-grid" style={styles.contentGrid}>
            
            {/* Bio Side */}
            <div style={styles.bioColumn}>
              <p className="about-text" style={styles.text}>
                {personalInfo.bio} Student at {personalInfo.institution}.
              </p>
              <p className="about-text" style={styles.text}>
                I started my journey into tech with a strong drive for learning how systems work from scratch. Since then, this has evolved into full-stack development and hands-on ICT support, fueling my dedication to engineering clean, reliable solutions.
              </p>
            </div>

            {/* Experience Side */}
            <div style={styles.experienceColumn}>
              {personalInfo.experience && personalInfo.experience.map((item, index) => (
                <div key={index} className="about-experience-card" style={styles.experienceCard}>
                  <div style={styles.expTopRow}>
                    <h3 className="about-exp-title" style={styles.expTitle}>{item.role}</h3>
                    <span className="about-exp-badge" style={styles.expBadge}>{item.company}</span>
                  </div>
                  <div className="about-exp-period" style={styles.expPeriod}>{item.period}</div>
                  <p className="about-exp-desc" style={styles.expDesc}>{item.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Desktop Stats Grid (Untouched for Big Screens) */}
          <div className="desktop-stats-grid" style={styles.statsContainer}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>120+</div>
              <div style={styles.statLabel}>Completed Projects</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>95%</div>
              <div style={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>2+</div>
              <div style={styles.statLabel}>Years of Experience</div>
            </div>
          </div>

          {/* Completely Modified Mobile Stats View (Vertical Stack Layout) */}
          <div className="mobile-stats-stack">
            <div className="mobile-stat-row">
              <span className="mobile-stat-label">Completed Projects</span>
              <span className="mobile-stat-value">120+</span>
            </div>
            <div className="mobile-stat-row">
              <span className="mobile-stat-label">Client Satisfaction</span>
              <span className="mobile-stat-value">95%</span>
            </div>
            <div className="mobile-stat-row">
              <span className="mobile-stat-label">Years of Experience</span>
              <span className="mobile-stat-value">2+</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}