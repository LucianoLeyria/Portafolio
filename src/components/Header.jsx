import React, { useEffect, useState } from 'react';
import { useColorMode, useMediaQuery } from '@chakra-ui/react';
import Cara from '../pngs/cara.png';
import swal from 'sweetalert';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAlert = () => {
    swal(
      'Soy una persona muy responsable, dinámico y creativo, me comprometo mucho cuando hay que solucionar problemas 💻, en el trabajo en equipo me gusta aportar ideas e intercambiar opiniones con los compañeros. Dispuesto a aprender diferentes tecnologías.'
    );
  };

  const socialLinks = [
    { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/Lucianoleyria/', label: 'LinkedIn' },
    { Icon: FaGithub,   url: 'https://github.com/LucianoLeyria',           label: 'GitHub' },
    { Icon: FaInstagram,url: 'https://www.instagram.com/lucholeyria/',      label: 'Instagram' },
    { Icon: FaTwitter,  url: 'https://twitter.com/Luchinike',               label: 'Twitter' },
  ];

  return (
    <section
      id='inicio'
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingLeft: isNotSmallerScreen ? '3rem' : '1.5rem',
        paddingRight: isNotSmallerScreen ? '3rem' : '1.5rem',
        paddingBottom: '60px',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: isNotSmallerScreen ? 'row' : 'column-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isNotSmallerScreen ? '4rem' : '2.5rem',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>

        {/* Text Side */}
        <div style={{ flex: 1, textAlign: isNotSmallerScreen ? 'left' : 'center' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.25)',
            borderRadius: '100px',
            padding: '6px 14px',
            marginBottom: '1.5rem',
            fontSize: '0.8rem',
            color: '#22d3ee',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}>
            <span>👋</span>
            <span>Hola, bienvenido a mi portfolio</span>
          </div>

          {/* Name */}
          <h1 style={{
            margin: '0 0 0.5rem',
            fontSize: isNotSmallerScreen ? 'clamp(3rem, 5vw, 5rem)' : '3rem',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Luciano<br />Leyría
          </h1>

          {/* Role */}
          <p style={{
            margin: '0 0 0.75rem',
            fontSize: isNotSmallerScreen ? '1.2rem' : '1rem',
            fontWeight: 500,
            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)',
          }}>
            Desarrollador Full Stack 💻
          </p>

          <p style={{
            margin: '0 0 2rem',
            fontSize: '0.9rem',
            color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)',
            maxWidth: '36ch',
            lineHeight: 1.7,
            marginLeft: isNotSmallerScreen ? 0 : 'auto',
            marginRight: isNotSmallerScreen ? 0 : 'auto',
          }}>
            Apasionado por construir soluciones digitales modernas y escalables.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: isNotSmallerScreen ? 'flex-start' : 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={handleAlert}
              style={{
                padding: '0.75rem 1.75rem',
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 4px 24px rgba(34, 211, 238, 0.3)',
                transition: 'all 0.25s ease',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(34, 211, 238, 0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(34, 211, 238, 0.3)'; }}
            >
              ¿Por qué yo? →
            </button>
            <a
              href='#proyectos'
              style={{
                padding: '0.75rem 1.75rem',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '12px',
                color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.7)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Ver proyectos
            </a>
          </div>

          {/* Social links — real react-icons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: isNotSmallerScreen ? 'flex-start' : 'center' }}>
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target='_blank'
                rel='noreferrer'
                title={label}
                style={{
                  width: '42px',
                  height: '42px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
                  fontSize: '1.15rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(34, 211, 238, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.4)';
                  e.currentTarget.style.color = '#22d3ee';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Photo Side */}
        <div style={{ flex: isNotSmallerScreen ? '0 0 auto' : 'unset', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-20px',
            background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0,
          }} />
          <img
            src={Cara}
            alt='Luciano Leyria'
            style={{
              position: 'relative',
              zIndex: 1,
              width: isNotSmallerScreen ? '280px' : '200px',
              height: isNotSmallerScreen ? '280px' : '200px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid rgba(34, 211, 238, 0.5)',
              boxShadow: '0 0 60px rgba(34, 211, 238, 0.2)',
            }}
          />
        </div>
      </div>
    </section>
  );
};
