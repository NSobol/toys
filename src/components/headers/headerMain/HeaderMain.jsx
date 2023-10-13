import React from 'react';
import { Logo } from '../logo/Logo.jsx';
import { Search } from './../search/Search.jsx';
import s from './headerMain.module.css';
import { HeaderIcons } from '../userHeaderIcons/UserHeaderIcons.jsx';

export const HeaderMain = () => {
  return (
    <div className={s.headerMain}>
        <div className={s.container}>
          <Logo />
          <Search />
          <HeaderIcons />
        </div>
    </div>
  );
};
