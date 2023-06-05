import React, { useContext, useState } from 'react';
import { CardList } from '../../components/content/cardList/CardList';
import Paginate from '../../components/content/pagination/Paginate';
import { Advantages } from '../../components/content/advantages/Advantages';
import { getCorrectWordEnding } from '../../utils/function';
import { BannerContent } from '../../components/content/bannerContent/BannerContent';
import { ProductsContext } from '../../context/productsContext';
import {
  CHEAPEST,
  EXPENSIVE,
  NEWEST,
  POPULAR,
  RATE,
  SALE,
} from './../../constants/Constants';
import { Modal } from '../../components/modal/Modal';
import { Registr } from '../../components/headers/registration/Registr';

export const RegistrationPage = () => {
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
 const [active, setActive] = useState(false);
  return (
    <div className='catalog'>
      <BannerContent />
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
      {active && (
        <Modal active={active} setActive={setActive}>
          <Registr />
        </Modal>
      )}
    </div>
  );
};
