import React from 'react';
import style from './autoriz.module.css';

export const Autoriz = (props) => {
  return (
    <div>
      <button className={style.autorizBtn} onClick={props}>
        Вход
      </button>
    </div>
  );
};
