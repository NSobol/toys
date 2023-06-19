import React from 'react';
import { ReactComponent as Smile } from './../../images/smile.svg';
import { Link } from 'react-router-dom';
import style from './emptyBasket.module.css';

export const EmptyBasket = () => {
  return (
    <div className={style.container}>
      <Smile className={style.smile} />
      <p className={style.title}>В корзине нет товаров</p>
      <p className={style.subTitle}>
        Добавьте товар, нажав кнопку «В корзину» в карточке товара
      </p>

      <Link to='/' className={style.link}>
        На главную
      </Link>
    </div>
  );
};
