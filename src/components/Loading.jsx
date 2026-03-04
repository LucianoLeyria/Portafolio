import React from 'react';
import '../components/css/Loading.css';

export const Loading = () => {
  return (
    <div className='loader-overlay'>
      <div className='loader'>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
        <div className='loader-square'></div>
      </div>
      <p className='loader-label'>Cargando...</p>
    </div>
  );
};
