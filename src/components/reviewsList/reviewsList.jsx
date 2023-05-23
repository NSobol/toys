import React from 'react';
import { Review } from '../review/rewiew';
import style from './reviewsList.module.css';

export const ReviewsList = ({
  productId,
  getDeleteReview,
  reviews = [],
}) => {
  return (
    <div>
      {reviews
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .map((item) => (
          <div className={style.review__item} key={item._id}>
            <Review productId={productId} review={item} />
            <button
              onClick={() => getDeleteReview(item._id)}
              className={style.delReview}
            ></button>
          </div>
        ))}
    </div>
  );
};
