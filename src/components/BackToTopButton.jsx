import React, { useState, useEffect } from 'react';

export const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={goUp}
      title='Volver al inicio'
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '48px',
        height: '48px',
        background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
        border: 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        boxShadow: '0 4px 20px rgba(34, 211, 238, 0.4)',
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
        transform: show ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 999,
        color: 'white',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(34, 211, 238, 0.55)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = show ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(34, 211, 238, 0.4)';
      }}
    >
      ↑
    </button>
  );
};
