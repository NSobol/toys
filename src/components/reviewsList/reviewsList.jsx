import React from 'react';
import { Review } from '../review/rewiew';
import style from './reviewsList.module.css';

export const ReviewsList = ({
  productId,
  getDeleteReview,
  user,
  reviews = [],
}) => {
  return (
    <div>
      {reviews
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .map((item) => (
          <div className={style.review__item} key={item._id}>
            <Review productId={productId} review={item} />
            {user?._id === item.author._id && (
              <button
                onClick={() => getDeleteReview(item._id)}
                className={style.delReview}
              ></button>
            )}
          </div>
        ))}
    </div>
  );
};
