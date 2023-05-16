import React from 'react';
import { Review } from '../review/rewiew';

export const ReviewsList = ({ productId, reviews = [] }) => {
  return (
    <div>
      {reviews.map((item) => (
        <div className='review__item'>
          <Review productId={productId} key={item.updated_at} review={item} />{' '}
          <button
            onClick={() => console.log(`Удаление ${productId} ${item._id}`)}
            className='delRew'
          >
            Удалить отзыв
          </button>
        </div>
      ))}
    </div>
  );
};
