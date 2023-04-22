import React from 'react';
import style from './buttonIcons.module.css';

export const ButtonIcon = (props ) => {
  return (
	  <button className={style.button} onclick={props}>
      <img src={props.src} alt={props.alt} />
    </button>
  );
};
