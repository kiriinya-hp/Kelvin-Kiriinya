import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "School Projects Development",
      description: "Assisting with coding, structuring, and developing academic and school-related programming projects to meet grading and technical criteria.",
      icon: "🎓"
    },
    {
      title: "Portfolio Development",
      description: "Designing and building modern, responsive, and custom developer or professional portfolios to showcase your projects and stand out.",
      icon: "💼"
    },
    {
      title: "Full-Stack Web Development",
      description: "Building responsive, high-performance web applications from front-end interfaces to back-end databases and APIs.",
      icon: "💻"
    },
    {
      title: "System Architecture & Design",
      description: "Designing clean, scalable, and secure system workflows and architectures tailored to specific project requirements.",
      icon: "⚡"
    }
  ];

  const styles = {
    section: {
      padding: '6rem 2rem',
      backgroundColor: '#0b0f19',
      color: '#ffffff',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    subtitle: {
      fontSize: '0.9rem',
      color: '#f97316',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.5rem',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: '800',
      marginBottom: '3rem',
      background: 'linear-gradient(to right, #ffffff, #94a3b8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      borderRadius: '1rem',
      padding: '2rem 1.5rem',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease, border-color 0.3s ease',
    },
    iconWrapper: {
      fontSize: '2rem',
      marginBottom: '0.5rem',
    },
    serviceTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#ffffff',
    },
    description: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.6',
    },
  };

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.subtitle}>What I Do</div>
        <h2 style={styles.heading}>Services Provided</h2>
        
        <div style={styles.grid}>
          {servicesList.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>{service.icon}</div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}