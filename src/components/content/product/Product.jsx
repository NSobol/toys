import React, { useState } from 'react';
import './Product.css';
import { Modal } from './../../modal/Modal';
import { ReviewsList } from '../../reviewsList/reviewsList';
import { FormReview } from '../../formReview/FormReview';

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
        <div className='productReviews__header'>
          <h3>Отзывы:</h3>
          <button
            className='reviewsButton'
            onClick={() => {
              setActive(true);
            }}
          >
            <span>Написать отзыв</span>
          </button>
        </div>
        <ReviewsList productId={product._id} reviews={product?.reviews ?? []} />
      </div>
      <Modal active={active} setActive={setActive} product={product}>
        <FormReview product={product} setActive={setActive} />
      </Modal>
    </div>
  );
};
