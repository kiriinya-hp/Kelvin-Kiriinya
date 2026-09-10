import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      padding: '1rem 1.5rem',
      borderBottom: '1px solid #1e293b',
      zIndex: 1000,
      boxSizing: 'border-box',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#ffffff',
    },
    links: {
      display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'absolute' : 'static',
      top: '100%',
      left: 0,
      width: isMobile ? '100%' : 'auto',
      backgroundColor: isMobile ? '#0b0f19' : 'transparent',
      padding: isMobile ? '1.5rem' : '0',
      gap: isMobile ? '1.2rem' : '1.5rem',
      borderBottom: isMobile ? '1px solid #1e293b' : 'none',
      boxShadow: isMobile ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : 'none',
    },
    link: {
      color: '#cbd5e1',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.2s',
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Kelvin Kiriinya</div>
      
      <button 
        style={styles.hamburger} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div style={styles.links}>
        <a href="#about" style={styles.link} onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about-me" style={styles.link} onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" style={styles.link} onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#services" style={styles.link} onClick={() => setIsOpen(false)}>Services</a>
        <a href="#contact" style={styles.link} onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}