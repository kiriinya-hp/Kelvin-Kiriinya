import React from 'react';

export default function Contact() {
  const styles = {
    section: {
      padding: '6rem 2rem',
      backgroundColor: '#0b0f19',
      color: '#ffffff',
      textAlign: 'center',
      position: 'relative',
    },
    container: {
      maxWidth: '650px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
      border: '1px solid #1e293b',
      borderRadius: '1rem',
      padding: '3rem 2rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(8px)',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: '800',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #ffffff, #94a3b8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subText: {
      color: '#94a3b8',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '2.5rem',
    },
    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
    },
    whatsappButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      backgroundColor: '#25D366',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
    },
    callButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
    },
    emailButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 14px rgba(249, 115, 22, 0.4)',
    },
  };

  const whatsappUrl = "https://wa.me/254797722331?text=Hi%20Kelvin,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20say%20hello!";
  const phoneUrl = "tel:0797722331";
  const emailUrl = "mailto:kiriinyakelvin626@gmail.com";

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contacts</h2>
        <p style={styles.subText}>
          I'm currently looking for new opportunities or collaborations. Get in touch with me directly through any option below!
        </p>
        <div style={styles.buttonGroup}>
          <a 
            href={whatsappUrl} 
            style={styles.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Say Hello (WhatsApp)
          </a>
          <a 
            href={phoneUrl} 
            style={styles.callButton}
          >
            📞 Call Me
          </a>
          <a 
            href={emailUrl} 
            style={styles.emailButton}
          >
            ✉️ Email Me
          </a>
        </div>
      </div>
    </section>
  );
}