import React from 'react';
import favorites from './../../images/Favorites.svg';
import s from './UserHeaderIcons.module.css';

export const HeaderIcons = () => {
  return (
    <div className={s.header__icons}>
      <a href='/' className={s.header__link}>
        <img src={favorites} alt='favorites' className={s.header__icon} />
      </a>
    </div>
  );
};
