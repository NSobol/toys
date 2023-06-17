import React, { useContext } from 'react';
import { ReactComponent as Smile } from './../../images/smile.svg';
import style from './main.module.css';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../context/productsContext';

export const Main = () => {
  const { setActive } = useContext(ProductsContext);
  return (
    <div className={style.container}>
      <Smile className={style.smile} />
      <p className={style.title}>Упс... Что-то пошло не так </p>
      <p className={style.subTitle}>
        Пожалуйста зарегистрируйтесь или войдите....
      </p>

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
        <span className={style.registrBtn}>/</span>
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
