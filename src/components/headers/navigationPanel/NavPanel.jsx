import React from 'react';
import style from "./navPanel.module.css";

export const NavPanel = () => {
  return (
    <div className={style.navLinks}>
      <a href='/' className={style.linkItem}>
        О компании
      </a>
      <a href='/' className={style.linkItem}>
        Контакты
      </a>
    </div>
  );
};
