import React from 'react';

export default function AvailabilityBadge() {
  const styles = {
    badgeWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      padding: '0.5rem 1rem',
      borderRadius: '2rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(8px)',
    },
    pulseContainer: {
      position: 'relative',
      width: '10px',
      height: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pulseDot: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      animation: 'pulse-animation 2s infinite',
    },
    coreDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      zIndex: 1,
      boxShadow: '0 0 8px #25D366',
    },
    text: {
      color: '#cbd5e1',
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.01em',
    },
    highlight: {
      color: '#f97316',
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulse-animation {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(2.2);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }
      `}</style>

      <div style={styles.badgeWrapper}>
        <div style={styles.pulseContainer}>
          <div style={styles.pulseDot}></div>
          <div style={styles.coreDot}></div>
        </div>
        <span style={styles.text}>
          Status: <span style={styles.highlight}>Available for Projects & Commissions</span>
        </span>
      </div>
    </>
  );
}