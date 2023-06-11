import React, { useContext } from 'react';
import { Logo } from '../logo/Logo.jsx';
import { Search } from './../search/Search.jsx';
import { AdminHeaderIcons } from '../adminHeaderIcons/AdminHeaderIcons.jsx';
import style from './headerMain.module.css';
import { HeaderIcons } from '../userHeaderIcons/UserHeaderIcons.jsx';
import { ProductsContext } from '../../../context/productsContext.jsx';

export const HeaderMain = () => {
  const { admin } = useContext(ProductsContext);

  return (
    <div className={style.headerMain}>
      {admin ? (
        <div className={style.container}>
          <Logo />
          <Search />
          <HeaderIcons />
          <AdminHeaderIcons />
        </div>
      ) : (
        <div className={style.container}>
          <Logo />
          <Search />
          <HeaderIcons />
        </div>
      )}
    </div>
  );
};
