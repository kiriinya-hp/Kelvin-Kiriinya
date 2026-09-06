import React from 'react';

export default function Navbar() {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#0b0f19',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #1e293b',
      zIndex: 1000,
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#ffffff',
    },
    links: {
      display: 'flex',
      gap: '1.5rem',
    },
    link: {
      color: '#cbd5e1',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'color 0.2s',
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Kelvin Kiriinya</div>
      <div style={styles.links}>
        <a href="#about" style={styles.link}>Home</a>
        <a href="#about-me" style={styles.link}>About</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contacts</a>
      </div>
    </nav>
  );
}