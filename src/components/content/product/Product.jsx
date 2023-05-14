import React, { useState } from 'react';
import './Product.css';
import { ReviewForm } from './../../ReviewForm/ReviewForm';
import { Modal } from './../../modal/Modal';
import { ReviewsList } from '../../reviewsList/reviewsList';

export const Product = ({ product }) => {
  const [active, setActive] = useState(false);
  return (
    <div className='cardProduct__container'>
      <div className='cardProduct'>
        <div className='leftBar'>
          <img className='product__img' src={product.pictures} alt='картинка' />
        </div>
        <div className='rightBar'>
          <h2 className='product__title'>{product.name}</h2>
          <p className='rightBarP'>Описание: {product.description}</p>
          <p className='rightBarP'>Ед. измерения: {product.wight}</p>
          <p className='rightBarP'>
            Цена: <b>{product.price} p</b>
          </p>
        </div>
      </div>
      <div className='productReviews'>
        <h3>Отзывы:</h3>
        <button
          className='reviewsButton'
          onClick={() => {
            setActive(true);
          }}
        >
          <span>Написать отзыв</span>
        </button>
        <ReviewsList reviews={product.reviews} />
      </div>
      <Modal active={active} setActive={setActive} product={product}>
        <ReviewForm product={product} setActive={setActive} />
      </Modal>
    </div>
  );
};
