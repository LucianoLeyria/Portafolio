import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tecnologías', href: '#technologies' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(13, 15, 26, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(255,255,255,0.08)'
        : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      {/* Logo */}
      <a href="#inicio" style={{
        fontWeight: 800,
        fontSize: '1.25rem',
        background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.02em',
        textDecoration: 'none',
      }}>
        LL
      </a>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 2rem)' }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: 'rgba(255,255,255,0.72)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#22d3ee')}
            onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.72)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
