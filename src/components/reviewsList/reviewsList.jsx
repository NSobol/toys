import React from 'react';
import { Review } from '../review/rewiew';

export const ReviewsList = ({ reviews=[] } ) => {
	console.log( reviews );
  return (
    <div>
		  {reviews.map((item) => 
			  <Review key={item.updated_at} review={item} />
		  )}
    </div>
  );
};
