import React from 'react';
import { ProductsContext } from '../../context/productsContext';
import { useContext } from 'react';
import { CardList } from './../../components/content/cardList/CardList';
import { Advantages } from './../../components/content/advantages/Advantages';
import './Catalog.css';
import Paginate from '../../components/content/pagination/Paginate';
import {
  CHEAPEST,
  EXPENSIVE,
  NEWEST,
  POPULAR,
  RATE,
  SALE,
} from './../../constants/Constants';
import { getCorrectWordEnding } from '../../utils/function';
import { Slider } from '../../components/slider/Slider';

export const CatalogPage = () => {
  const { products, search, currentProducts, getSorted } =
    useContext(ProductsContext);

  const sortedItems = [
    { id: POPULAR },
    { id: RATE },
    { id: NEWEST },
    { id: CHEAPEST },
    { id: EXPENSIVE },
    { id: SALE },
  ];

  return (
    <div className='catalog'>
      <Slider />
      {search && (
        <p className='search'>
          По запросу <b>{search}</b>{' '}
          {products.length === 1 ? 'найден' : 'найдено'} {products.length}
          {getCorrectWordEnding(products.length)}
        </p>
      )}
      <div className='sort-cards'>
        {sortedItems.map((e) => (
          <span
            className='sort-item'
            key={e.id}
            onClick={() => getSorted(e.id)}
          >
            {e.id}
          </span>
        ))}
      </div>
      <CardList products={currentProducts} />
      <Paginate />
      <Advantages />
    </div>
  );
};
