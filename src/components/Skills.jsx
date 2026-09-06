import React, { useState, useEffect } from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Sequence controller: Lists skills -> Starts transition ticker -> Shows list again when finished
  useEffect(() => {
    let tickerInterval;
    let sequenceTimeout;

    const runSequence = () => {
      // Step 1: Show full skill inventory list for 4 seconds
      setIsTranslating(false);
      
      sequenceTimeout = setTimeout(() => {
        // Step 2: Hide list and start translation/ticker mode
        setIsTranslating(true);
        setCurrentIndex(0);
        setFade(true);

        let count = 0;
        // Cycle through all skills once during translation mode
        tickerInterval = setInterval(() => {
          setFade(false);
          setTimeout(() => {
            count++;
            if (count < skills.length) {
              setCurrentIndex(count);
              setFade(true);
            } else {
              // Translation finished: Clear ticker interval and restart sequence
              clearInterval(tickerInterval);
              setTimeout(runSequence, 300);
            }
          }, 300);
        }, 2200);

      }, 4000);
    };

    runSequence();

    return () => {
      clearTimeout(sequenceTimeout);
      clearInterval(tickerInterval);
    };
  }, []);

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
      transition: 'all 0.5s ease',
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
      minHeight: '140px',
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%)',
      border: '1px solid #1e293b',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
      position: 'relative',
      overflow: 'hidden',
    },
    tickerItem: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#ffffff',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      letterSpacing: '-0.01em',
    }
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.wrapper}>
        
        {/* Full skill list displays when NOT in translation mode */}
        {!isTranslating && (
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
        )}

        {/* Real-time translation ticker activates when the static list disappears */}
        {isTranslating && (
          <div style={styles.tickerContainer}>
            <div style={{ ...styles.heading, marginBottom: '0.75rem' }}>Live Skill Spotlight & Translation</div>
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
        )}

      </div>
    </section>
  );
}