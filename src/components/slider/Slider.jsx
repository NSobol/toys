import React, { useEffect } from 'react';
import { useState } from 'react';
import { slides } from '../../constants/Constants';
import s from './slider.module.css';
import { ReactComponent as Prev } from './../../images/arrow-left.svg';
import { ReactComponent as Next } from './../../images/arrow-right.svg';

export const Slider = () => {
  const [items] = useState(slides); //массив слайдов
  const [currentSlide, setCurrentSlide] = useState(0); //номер активного слайда

  const moveDot = (i) => {
    setCurrentSlide(i);
  };
  useEffect(() => {
    const lastIndex = items.length - 1;
    if (currentSlide < 0) {
      setCurrentSlide(lastIndex);
    }
    if (currentSlide > lastIndex) {
      setCurrentSlide(0);
    }
  }, [currentSlide, items]);

  useEffect(() => {
    let slider = setInterval(
      () => setCurrentSlide((prevState) => prevState + 1),
      5000
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentSlide]);

  return (
    <div className={s.slider}>
      {items.map((item, slide) => {
        let position = 'nextSlide';
        if (slide === currentSlide) {
          position = 'activeSlide';
        }
        if (
          slide === currentSlide - 1 ||
          (currentSlide === 0 && slide === items.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <div className={s[`${position}`]} key={items[slide].id}>
            <img
              src={items[slide].src}
              alt='баннер'
              className={s.slider__image}
            />
          </div>
        );
      })}
      <div className={s.slider__arrows}>
        <Prev
          className={s['slider__arrow']}
          onClick={() => setCurrentSlide((prevState) => prevState - 1)}
        />
        <Next
          className={s['slider__arrow']}
          onClick={() => setCurrentSlide((prevState) => prevState + 1)}
        />
      </div>
      <div className={s.slider__dots}>
        {items.map((item, i) => (
          <div
            className={
              s[`${currentSlide === i ? 'slider__dot_active' : 'slider__dot'}`]
            }
            key={i}
            onClick={() => moveDot(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};
