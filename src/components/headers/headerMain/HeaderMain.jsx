import React from 'react';
import { Logo } from '../logo/Logo.jsx';
import { Search } from './../search/Search.jsx';
import { AdminHeaderIcons } from '../adminHeaderIcons/AdminHeaderIcons.jsx';
import style from './headerMain.module.css';
  

export const HeaderMain = (props) => {

  const setScanQuery = (way) => {
    props.setSearch(way);
}
  return (
    <div className={style.headerMain}>
      <div className={style.container}>
        <Logo />
        <Search setSearch={setScanQuery}/>
        <AdminHeaderIcons />
      </div>
    </div>
  );
};
