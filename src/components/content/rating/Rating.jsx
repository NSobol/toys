import React, { useState } from "react";
import s from "./Rating.module.css";
import { ReactComponent as Star } from "./../../../images/star.svg";

export const FormRating = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

 
   return (
    <div className={s.stars}>
      {stars.map((_, index) => {
        return (
          <Star
            className={(hoverValue || currentValue) > index ? s['filled'] :s["star"] }
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
