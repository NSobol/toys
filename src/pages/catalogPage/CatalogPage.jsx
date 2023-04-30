import React from 'react';
// import { Content } from '../../components/content/Content'
// import { ProductsContext } from '../../context/productsContext';
// import { useContext } from 'react';
import { BannerContent } from './../../components/content/bannerContent/BannerContent';
import { CardList } from './../../components/content/cardList/CardList';
import { Advantages } from './../../components/content/advantages/Advantages';
import './Catalog.css';

export const CatalogPage = () => {
  return (
    <div className='catalog'>
      <BannerContent />
      <CardList />
      <Advantages />
    </div>
  );
};
