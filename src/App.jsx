import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0b0f19', minHeight: '100vh', margin: 0, fontFamily: 'sans-serif', color: '#ffffff' }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
      
      <footer style={{ backgroundColor: '#05070c', padding: '1.5rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem', borderTop: '1px solid #1e293b' }}>
        <p>© {new Date().getFullYear()} Kelvin Kiriinya. All rights reserved.</p>
      </footer>
    </div>
  );
}