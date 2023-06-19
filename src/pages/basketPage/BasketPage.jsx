import React, { useContext } from 'react';
import { ComeBack } from '../../components/comeBack/ComeBack';
import { EmptyBasket } from '../../components/emptyBasket.jsx/EmptyBasket';
import { getCorrectWordEnding } from '../../utils/function';
import { ProductsContext } from '../../context/productsContext';
import { Basket } from '../../components/basket/Basket';
import s from './basket.module.css'

export const BasketPage = () => {
  const { basket } = useContext(ProductsContext);
  return (
    <div className={s.container}>
      <ComeBack />
      <div className={s.basket}>
        <p className={s.countProducts}>
          В корзине <span className={s.count}>{basket.length}</span>
          {getCorrectWordEnding(basket.length)}
        </p>
        {basket.length !== 0 ? <Basket /> : <EmptyBasket />}
      </div>
    </div>
  );
};
