import React from 'react';
import { Card } from '../card/Card';
import style from './CardLics.module.css'

export const CardList = ({ products, userId }) => {
  return (
    <div className={style.products}>
      {products.map((item) => {
        return (
          <Card
            key={item.updated_at}
            {...item}
            product={item}
          />
        );
      })}
    </div>
  );
};
