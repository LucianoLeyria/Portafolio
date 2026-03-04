import React from 'react';
import { useColorMode, useMediaQuery } from '@chakra-ui/react';
import videogames from '../pngs/videogames.png';
import hostel from '../pngs/hostel.png';
import zapas from '../pngs/zapas.png';
import veterinario from '../pngs/veterinario.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Videogames Web',
    description: 'Página web donde podrás crear, buscar, filtrar y ver detalles de los videojuegos.',
    image: videogames,
    url: 'https://frontpi.herokuapp.com/',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'SoyHostel',
    description: 'Página web donde podrás llevar a cabo la gestión completa de un Hostel.',
    image: hostel,
    url: 'https://soyhostel.com',
    tags: ['React', 'Node.js', 'SQL'],
  },
  {
    title: 'E-commerce Zapatillas',
    description: 'Tienda online estilo e-commerce donde podés comprar zapatillas.',
    image: zapas,
    url: 'https://myecommercee.netlify.app/',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Turnos Veterinario',
    description: 'Solicitá turnos para tu mascota de forma rápida y sencilla.',
    image: veterinario,
    url: 'https://citaspet.netlify.app/',
    tags: ['React', 'Node.js'],
  },
];

export const Profile = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:680px)');

  return (
    <section
      id='proyectos'
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
          background: 'rgba(168, 85, 247, 0.1)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          borderRadius: '100px',
          padding: '5px 16px',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#a855f7',
          marginBottom: '1rem',
        }}>
          Portfolio
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
          Mis Proyectos
        </h2>
        <p style={{
          margin: '0 auto',
          color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)',
          fontSize: '1rem',
          maxWidth: '48ch',
          lineHeight: 1.7,
        }}>
          Una selección de proyectos en los que trabajé, desde web apps hasta e-commerce.
        </p>
      </div>

      {/* Projects grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isNotSmallerScreen ? 'repeat(2, 1fr)' : '1fr',
        gap: '1.5rem',
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isDark={isDark} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isDark }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
        border: `1px solid ${hovered
          ? 'rgba(168, 85, 247, 0.4)'
          : isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.09)'}`,
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 60px rgba(168, 85, 247, 0.15)'
          : '0 2px 12px rgba(0,0,0,0.1)',
        cursor: 'pointer',
      }}
      onClick={() => window.open(project.url, '_blank')}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
        {/* Overlay on hover */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(13,15,26,0.8) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: '1rem',
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'white',
            fontSize: '0.8rem',
            fontWeight: 600,
            background: 'rgba(168, 85, 247, 0.8)',
            padding: '6px 12px',
            borderRadius: '8px',
            backdropFilter: 'blur(8px)',
          }}>
            <FaExternalLinkAlt size={10} /> Ver proyecto
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
        <h3 style={{
          margin: '0 0 0.5rem',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: isDark ? '#f1f5f9' : '#0f172a',
          letterSpacing: '-0.01em',
        }}>
          {project.title}
        </h3>
        <p style={{
          margin: '0 0 1rem',
          fontSize: '0.85rem',
          color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
          lineHeight: 1.6,
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: '3px 10px',
              background: isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '100px',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#a855f7',
              letterSpacing: '0.02em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
