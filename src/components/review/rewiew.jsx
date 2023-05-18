import React from "react";
import "./reviewS.css";

export const Review = ({ productId, review }) => {
  return (
    <div className="review__card">
      <div className="review__card__header">
        <img
          src={review.author.avatar}
          alt="avatar"
          className="review__card__header__avatar"
        />
        <p className="review__card__header__name">{review.author.name}</p>
        <p className="review__card__header__date">{review.author.created_at}</p>
      </div>
      {/* rate component */}
      <p>{review.rating}</p>
      <p className="review__card__text">{review.text}</p>
     
    </div>
  );
};
