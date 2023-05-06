import React from 'react';
import { ProductsContext } from '../../context/productsContext';
import { useContext } from 'react';
import { BannerContent } from './../../components/content/bannerContent/BannerContent';
import { CardList } from './../../components/content/cardList/CardList';
import { Advantages } from './../../components/content/advantages/Advantages';
import './Catalog.css';
import Paginate from '../../components/content/pagination/Paginate';

export const CatalogPage = () => {
  const { products, search, currentProducts } = useContext(ProductsContext);
  const getIssues = (numb) => {
    const tmp = numb % 10;
    if (!tmp || !numb) {
      return ' товаров';
    }
    if (tmp === 1) {
      return ' товар';
    }
    if (tmp > 1 && tmp < 5) {
      return ' товара';
    }
  };
  return (
    <div className='catalog'>
      <BannerContent />
      {search && (
        <p className='search'>
          По запросу <b>{search}</b>{' '}
          {products.length === 1 ? 'найден' : 'найдено'} {products.length}
          {getIssues(products.length)}
        </p>
      )}
      <CardList products={currentProducts} />
      <Paginate />
      <Advantages />
    </div>
  );
};
