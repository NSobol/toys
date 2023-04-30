import React from 'react';
import { Card } from '../card/Card';
import style from './CardLics.module.css';
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react'

export const CardList = () => {

  const { products, userId, getHandlerLiks }=useContext(ProductsContext);

  return (
    <div className={style.products}>
      {products.map((item) => {
        return (
          <Card
            key={item.updated_at}
            {...item}
            product={item}
            handlerLiks={getHandlerLiks}
          />
        );
      })}
    </div>
  );
};
