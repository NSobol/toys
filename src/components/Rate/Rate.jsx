import React from 'react'
import s from "./Rate.module.css"
import { ReactComponent as Star } from "./../../images/star.svg";

export const Rate = ({rating}) => {
    const stars = Array(5).fill(0);
   console.log(rating)
    
  return (
    <div>
         {stars.map((_, index) => {
        return (
          <Star
            className={rating > index ? s['filled'] :s["star"] }
            key={index}
          />
        );
      })}
    </div>
  )
}
