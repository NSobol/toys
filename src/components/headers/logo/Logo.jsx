import React from 'react';
import LogoImage from './../../../images/logo.png';
import style from './logo.module.css';

export const Logo = () => {
  return (
    <a href='/ '>
      <img src={LogoImage} alt='Логотип' className={style.logo} />
    </a>
  );
};
