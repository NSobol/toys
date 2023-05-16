import React from 'react';
import { Review } from '../review/rewiew';
import style from "./reviewsList.module.css"

export const ReviewsList = ({ productId, reviews = [] }) => {
  return (
    <div>
      {reviews.map((item) => (
        <div className={style.review__item}>
          <Review productId={productId} key={item.updated_at} review={item} />{' '}
			  <button
				  onClick={() => console.log(`Удаление ${productId} ${item._id}`)}
				  className={ style.delReview}
          >
          </button>
        </div>
      ))}
    </div>
  );
};
