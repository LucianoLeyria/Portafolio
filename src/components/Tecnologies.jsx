import React, { useRef } from 'react';
import { useColorMode, useMediaQuery } from '@chakra-ui/react';
import { skillsArray } from '../data/data';

export const Tecnologies = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <section
      id='technologies'
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: isNotSmallerScreen ? '5rem 3rem' : '4rem 1.5rem',
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(34, 211, 238, 0.1)',
          border: '1px solid rgba(34, 211, 238, 0.25)',
          borderRadius: '100px',
          padding: '5px 16px',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#22d3ee',
          marginBottom: '1rem',
        }}>
          Stack Tecnológico
        </span>

        <h2 style={{
          margin: '0 0 1rem',
          fontSize: isNotSmallerScreen ? 'clamp(2rem, 4vw, 3rem)' : '1.75rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.2,
        }}>
          Tecnologías que utilizo
        </h2>

        <p style={{
          margin: 0,
          color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)',
          fontSize: '1rem',
          maxWidth: '50ch',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.7,
        }}>
          Herramientas y tecnologías con las que trabajo día a día para construir soluciones robustas.
        </p>
      </div>

      {/* Tech grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isNotSmallerScreen
          ? 'repeat(auto-fill, minmax(120px, 1fr))'
          : 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '1rem',
      }}>
        {skillsArray.map((tech, index) => (
          <TechCard key={index} tech={tech} isDark={isDark} index={index} />
        ))}
      </div>
    </section>
  );
};

const TechCard = ({ tech, isDark, index }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'rgba(34, 211, 238, 0.08)'
          : isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
        border: `1px solid ${hovered ? 'rgba(34, 211, 238, 0.35)' : isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'}`,
        borderRadius: '16px',
        padding: '1.25rem 0.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        cursor: 'default',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 12px 40px rgba(34, 211, 238, 0.15)' : 'none',
        animationFillMode: 'both',
      }}
    >
      <img
        src={tech.image}
        alt={tech.name}
        style={{
          width: '42px',
          height: '42px',
          objectFit: 'contain',
          filter: isDark ? 'brightness(0.95)' : 'none',
          transition: 'transform 0.25s ease',
          transform: hovered ? 'scale(1.15)' : 'scale(1)',
        }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <span style={{
        fontSize: '0.72rem',
        fontWeight: 600,
        color: hovered ? '#22d3ee' : isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.65)',
        textAlign: 'center',
        lineHeight: 1.3,
        letterSpacing: '0.01em',
        transition: 'color 0.25s ease',
      }}>
        {tech.name}
      </span>
    </div>
  );
};
