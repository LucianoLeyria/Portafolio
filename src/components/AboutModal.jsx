import React, { useEffect } from 'react';

const highlights = [
  { emoji: '🎯', title: 'Responsable', text: 'Me comprometo con lo que asumo y cumplo los tiempos.' },
  { emoji: '🧩', title: 'Resolutivo', text: 'Disfruto encontrarle la vuelta a los problemas difíciles.' },
  { emoji: '🤝', title: 'En equipo', text: 'Aporto ideas e intercambio opiniones con mis compañeros.' },
  { emoji: '🚀', title: 'Siempre aprendiendo', text: 'Curioso por naturaleza, sumo tecnologías nuevas todo el tiempo.' },
];

export const AboutModal = ({ open, onClose }) => {
  // Cerrar con Escape + bloquear scroll del body mientras está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(6, 8, 15, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'aboutFade 0.25s ease',
      }}
    >
      {/* keyframes inline (no depende de CSS externo) */}
      <style>{`
        @keyframes aboutFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes aboutPop { from { opacity: 0; transform: translateY(16px) scale(0.97) } to { opacity: 1; transform: none } }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '540px',
          background:
            'linear-gradient(180deg, rgba(23,26,42,0.95) 0%, rgba(13,15,26,0.95) 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 60px rgba(34,211,238,0.08)',
          animation: 'aboutPop 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* borde superior con gradiente */}
        <div style={{
          position: 'absolute',
          top: 0, left: '10%', right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.7), transparent)',
        }} />

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
        >
          ✕
        </button>

        {/* Badge */}
        <span style={{
          display: 'inline-block',
          background: 'rgba(34, 211, 238, 0.1)',
          border: '1px solid rgba(34, 211, 238, 0.25)',
          borderRadius: '100px',
          padding: '5px 14px',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#22d3ee',
          marginBottom: '1rem',
        }}>
          Sobre mí
        </span>

        <h3 style={{
          margin: '0 0 0.75rem',
          fontSize: '1.6rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#f1f5f9',
        }}>
          ¿Por qué yo?
        </h3>

        <p style={{
          margin: '0 0 1.5rem',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
        }}>
          Desarrollador Full Stack apasionado por construir soluciones digitales
          modernas y escalables. Estas son las cosas que me definen trabajando:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.75rem',
        }}>
          {highlights.map((h) => (
            <div key={h.title} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '14px',
              padding: '1rem',
            }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{h.emoji}</div>
              <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                {h.title}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                {h.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
