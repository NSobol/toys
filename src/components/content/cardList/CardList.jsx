import React from 'react';
import { Card } from '../card/Card';

export const CardList = ({ products, userId }) => {
  return (
    <div className='products'>
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
