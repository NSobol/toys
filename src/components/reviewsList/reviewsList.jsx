import React from 'react';
import { Review } from '../review/rewiew';

export const ReviewsList = ({ productId, reviews=[] } ) => {
  return (
    <div>
		  {reviews.map((item) => 
			  <Review productId = {productId} key={item.updated_at} review={item} />
		  )}
    </div>
  );
};
