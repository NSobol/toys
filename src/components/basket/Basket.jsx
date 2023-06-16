import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { getCorrectWordEnding } from '../../utils/function';

export const Basket = () => {
  const [gds, setGds] = useState([]);
  const { basket, goods } = useContext(ProductsContext);
  useEffect(() => {
    const arr = [];
    if (goods.length) {
      basket.forEach((el) => {
        arr.push(goods.filter((g) => g._id === el.id)[0]);
      });
    }
    setGds(arr);
  }, [basket, goods]);

  return (
    <div className='container'>
      <h1>Корзина</h1>
      <p className='countProducts'>
        В корзине {goods.length}
        {getCorrectWordEnding(goods.length)}
      </p>
      <div className='blockLeft'></div>
      <div className='blockRight'></div>
    </div>
  );
};