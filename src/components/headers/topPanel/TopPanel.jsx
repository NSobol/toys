import React, { useContext} from 'react';
import { NavPanel } from './../navigationPanel/NavPanel';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../context/productsContext';
import style from './topPanel.module.css';

export const TopPanel = () => {
  const { setActive } = useContext(ProductsContext);
  return (
    <div className={style.topPanel}>
      <NavPanel />
      <div className={style.autoriz}>
        <Link
          className={style.registrBtn}
          to={'/registr'}
				  onClick={() => {
            setActive(true);
          }}
        >
          Регистрация
        </Link>
        /
        <Link
          to={'/login'}
          className={style.registrBtn}
          onClick={() => {
            setActive(true);
          }}
        >
          Вход
			  </Link> 
      </div>
    </div>
  );
};
