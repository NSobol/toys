import React from 'react';
import { TopPanel } from './../topPanel/TopPanel.jsx';
import style from './header.module.css';
import { HeaderMain } from './../headerMain/HeaderMain.jsx';

const Header = (props) => {
  return (
    <div className={style.header}>
      <TopPanel />
      <HeaderMain setSearch={props.setSearch}/>
    </div>
  );
};
export default Header;
