import React, { useCallback, useEffect, useState } from 'react';
import s from './Rating.module.css';
import { ReactComponent as Star } from './../../../images/star.svg';
import cn from 'classnames';

export const Rating = ({ rating, setRate = () => {}, isEditable = false }) => {
  const emptyFragments = new Array(5).fill(<></>);
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

  function changeDisplay(r) {
    if (!isEditable) {
      return;
    }
    constructRating(r);
  }

  const constructRating = useCallback(
    (rate) => {
      const updatedArray = emptyFragments.map((elem, index) => (
        <Star
          className={cn(s.starRating, {
            [s.filledRating]: index < rate,
            [s.editableRating]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(index + 1)}
        />
      ));
      setRatingArr(updatedArray);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rating, isEditable]
  );

  useEffect(() => {
    constructRating(rating);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {ratingArr.map((e, i) => (
        <span key={i}>{e}</span>
      ))}
    </div>
  );
};
