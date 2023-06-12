import React from 'react';
import { ComeBack } from '../../components/comeBack/ComeBack';
import { EmptyBasket } from '../../components/emptyBasket.jsx/EmptyBasket';

export const BasketPage = () => {
  return (
    <div className='container'>
      <ComeBack />
      <div className='basket'><EmptyBasket /></div>
    </div>
  );
};
