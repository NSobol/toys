import React from 'react';
import { Logo } from '../logo/Logo.jsx';
import { Search } from './../search/Search.jsx';
import { AdminHeaderIcons } from '../adminHeaderIcons/AdminHeaderIcons.jsx';
import style from './headerMain.module.css';
  

export const HeaderMain = () => {
   return (
    <div className={style.headerMain}>
      <div className={style.container}>
        <Logo />
        <Search />
        <AdminHeaderIcons />
      </div>
    </div>
  );
};
