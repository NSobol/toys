import React from 'react';
import { Card } from '../card/Card';
import style from './CardLics.module.css';
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react'

export const CardList = (props) => {

   return (
    <div className={style.products}>
      {props.products.map((item) => {
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
