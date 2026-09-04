import React from 'react';

// Fondo decorativo global: aurora (manchas de color difusas que flotan),
// grid sutil con máscara radial, y una capa de grano para textura.
// Va fijo detrás de todo (z-index -1, sin capturar clicks).
export const Background = () => {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: '#08090f',
      }}
    >
      <style>{`
        @keyframes auroraA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(6%, 8%) scale(1.15); } }
        @keyframes auroraB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-8%, 5%) scale(1.1); } }
        @keyframes auroraC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(5%, -6%) scale(1.2); } }
        @media (prefers-reduced-motion: reduce) {
          .aurora-blob { animation: none !important; }
        }
      `}</style>

      {/* Aurora blobs */}
      <div className="aurora-blob" style={{
        position: 'absolute',
        top: '-18%', left: '-8%',
        width: '52vw', height: '52vw',
        background: 'radial-gradient(circle, rgba(34,211,238,0.40) 0%, transparent 62%)',
        filter: 'blur(50px)',
        animation: 'auroraA 22s ease-in-out infinite',
      }} />
      <div className="aurora-blob" style={{
        position: 'absolute',
        top: '-12%', right: '-12%',
        width: '48vw', height: '48vw',
        background: 'radial-gradient(circle, rgba(168,85,247,0.34) 0%, transparent 62%)',
        filter: 'blur(60px)',
        animation: 'auroraB 26s ease-in-out infinite',
      }} />
      <div className="aurora-blob" style={{
        position: 'absolute',
        top: '40%', left: '28%',
        width: '46vw', height: '46vw',
        background: 'radial-gradient(circle, rgba(59,130,246,0.26) 0%, transparent 62%)',
        filter: 'blur(70px)',
        animation: 'auroraC 30s ease-in-out infinite',
      }} />

      {/* Grid sutil con máscara radial (se desvanece hacia abajo/costados) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '46px 46px',
        maskImage: 'radial-gradient(ellipse 100% 85% at 50% 0%, #000 35%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 85% at 50% 0%, #000 35%, transparent 90%)',
      }} />

      {/* Capa de grano (SVG noise) para textura */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.035,
        mixBlendMode: 'overlay',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }} />

      {/* Viñeta inferior para asentar el contenido */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 60%, rgba(8,9,15,0.6) 100%)',
      }} />
    </div>
  );
};
