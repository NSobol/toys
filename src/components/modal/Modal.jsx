import React, { useEffect } from 'react';
import './modal.css';

export const Modal = ({ active, setActive, children }) => {
  const closeOnEsc = (e) => {
    if (e.code === 'Escape') {
      document.removeEventListener('keydown', closeOnEsc);
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeOnEsc);

    return () => document.removeEventListener('keydown', closeOnEsc);
  }, [closeOnEsc]);
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <button className='modal__close' onClick={() => setActive(false)}>
          
        </button>
        {children}
      </div>
    </div>
  );
};
