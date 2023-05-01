import React from 'react';
import { ProductsContext } from '../../context/productsContext';
import { useContext } from 'react';
import { BannerContent } from './../../components/content/bannerContent/BannerContent';
import { CardList } from './../../components/content/cardList/CardList';
import { Advantages } from './../../components/content/advantages/Advantages';
import './Catalog.css';

export const CatalogPage = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='catalog'>
      <BannerContent />
      <CardList products={products} />
      <Advantages />
    </div>
  );
};
