import React, { useContext } from 'react';
import { CardList } from '../../components/content/cardList/CardList';
import { ProductsContext } from '../../context/productsContext';
import { ComeBack } from '../../components/comeBack/ComeBack';
import './favoritespage.css';

export const FavoritesPage = () => {
  const { selected } = useContext(ProductsContext);
  return (
    <div className='favorites__products'>
      <ComeBack />
      <h1>Избранное</h1>
      <CardList products={selected} />
    </div>
  );
};
