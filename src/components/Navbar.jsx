import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const Navbar = ({ isDark, toggleColorMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#' },
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
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled
        ? 'rgba(13, 15, 26, 0.85)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(255,255,255,0.08)'
        : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      {/* Logo */}
      <span style={{
        fontWeight: 800,
        fontSize: '1.2rem',
        background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.02em',
      }}>
        LL
      </span>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => e.target.style.color = '#22d3ee'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
          >
            {link.label}
          </a>
        ))}

        {/* Dark/Light toggle */}
        <button
          onClick={toggleColorMode}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            transition: 'all 0.2s ease',
            color: 'white',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          title={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};
