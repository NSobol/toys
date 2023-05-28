import React, { useCallback, useState } from 'react';
import s from './Rating.module.css';
import { ReactComponent as Star } from './../../../images/star.svg';

const stars = Array(5).fill(0);
export const FormRating = ({ rate, setRate }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = useCallback(
    (value) => {
      setCurrentValue(value);
      setRate(value);
    },
    [setRate]
  );

  const handleMouseOver = useCallback((newHoverValue) => {
    setHoverValue(newHoverValue);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverValue(undefined);
  }, []);

  return (
    <div className={s.stars}>
      {stars.map((_, index) => {
        return (
          <Star
            className={
              (hoverValue || currentValue) > index ? s['filled'] : s['star']
            }
            key={index}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};
