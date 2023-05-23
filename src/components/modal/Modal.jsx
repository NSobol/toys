import React, { useCallback, useEffect } from 'react';
import './modal.css';

export const Modal = ({ active, setActive, children }) => {
  const closeOnEsc = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        setActive(false);
      }
    },
    [setActive]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeOnEsc);
    return () => document.removeEventListener('keydown', closeOnEsc);
  }, [closeOnEsc]);

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className={active ? 'modal__content active' : 'modal__content'}>
        <span
          className='modal__close'
          onClick={() => setActive(false)}
        ></span>
        {children}
      </div>
    </div>
  );
};
