import React from 'react';
import { useColorMode, useMediaQuery } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  const socialLinks = [
    { Icon: FaLinkedin,  href: 'https://www.linkedin.com/in/Lucianoleyria/', label: 'LinkedIn' },
    { Icon: FaGithub,    href: 'https://github.com/LucianoLeyria',           label: 'GitHub' },
    { Icon: FaEnvelope,  href: 'mailto:leyrialu@gmail.com',          label: 'Email' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/lucholeyria/',      label: 'Instagram' },
    { Icon: FaTwitter,   href: 'https://twitter.com/Luchinike',              label: 'Twitter' },
  ];

  return (
    <footer
      id='contact'
      style={{
        width: '100%',
        padding: isNotSmallerScreen ? '4rem 3rem 3rem' : '3rem 1.5rem 2.5rem',
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isNotSmallerScreen ? 'row' : 'column',
        alignItems: isNotSmallerScreen ? 'center' : 'flex-start',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>
        <div>
          <p style={{
            margin: '0 0 0.25rem',
            fontWeight: 700,
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Luciano Leyría
          </p>
          <p style={{
            margin: 0,
            fontSize: '0.8rem',
            color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
          }}>
            © {new Date().getFullYear()} · Desarrollador Full Stack
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel='noreferrer'
              title={label}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '10px',
                fontSize: '1.05rem',
                color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(34, 211, 238, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.35)';
                e.currentTarget.style.color = '#22d3ee';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
                e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
