import React from 'react';
import style from './registr.module.css';

export const Registr = (props) => {
  return (
    <div>
      <button className={style.registrBtn} onClick={props}>
        Регистрация
      </button>
    </div>
  );
};
