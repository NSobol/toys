import React from 'react';
import style from './navPanel.module.css';
import { Link } from 'react-router-dom';

export const NavPanel = () => {
  return (
    <div className={style.navLinks}>
      <Link to='/orus' className={style.linkItem}>
        О компании
      </Link>
      <Link to='/contacts' className={style.linkItem}>
        Контакты
      </Link>
    </div>
  );
};
