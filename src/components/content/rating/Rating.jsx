import React, { useCallback, useEffect, useState } from 'react';
import s from './Rating.module.css';
import { ReactComponent as RatingStar } from './../../../images/star.rating.svg';

const emptyFragments = new Array(5).fill(<></>);
export const Rating = ({ rating, setRate = () => {}, isEditable = false }) => {
  const [ratingArr, setRatingArr] = useState(emptyFragments);

  const changeRating = useCallback(
    (r) => {
      if (!isEditable) {
        return;
      }
      setRate(r);
    },
    [setRate, isEditable]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function changeDisplay(r) {
		if (!isEditable) {
			return;
		}
		constructRating(r);
	}

  const constructRating = useCallback(
    (rate) => {
      const updatedArray = emptyFragments.map((elem, index) => (
        <RatingStar
          className={
            (s.starRating,
            {
              [s.filledRating]: index < rate,
              [s.editableRating]: isEditable,
            })
          }
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(index + 1)}
        />
      ));
      setRatingArr(updatedArray);
    },
    [rating, isEditable, changeRating, changeDisplay]
  );

  useEffect(() => {
    constructRating(rating);
  }, [constructRating, rating]);

  return (
    <div>
      {ratingArr.map((e, i) => (
        <span key={i}>{e}</span>
      ))}
    </div>
  );
};
