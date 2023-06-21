import React from 'react';
import { Card } from '../card/Card';
import style from './CardList.module.css';

export const CardList = ({ products }) => {
  return (
    <div className={style.products}>
      {products.map((item) => {
        return <Card key={item.updated_at} {...item} product={item} />;
      })}
    </div>
  );
};
