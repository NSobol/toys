import React from 'react';
import { Search } from './../search/Search.jsx';
import { AdminHeaderIcons } from '../adminHeaderIcons/AdminHeaderIcons.jsx';
import style from './headerMain.module.css';

export const HeaderMain = () => {
  return (
    <div className={style.headerMain}>
      <div className={style.container}>
        <Search />
        <AdminHeaderIcons />
      </div>
    </div>
  );
};
