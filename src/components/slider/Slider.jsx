import React from 'react';
import { useState } from 'react';
import { SlideItem } from './slideItem/SlideItem';
import { slides } from '../../constants/Constants';
import s from './slider.module.css';
import { ReactComponent as Prev } from './../../images/arrow-left.svg';
import { ReactComponent as Next } from './../../images/arrow-right.svg';

export const Slider = () => {
  const [items, setItems] = useState(slides); //массив слайдов
  const [currentSlide, setCurrentSlide] = useState(0); //номер активного слайда
  //   const [touchPosition, setTouchPosition] = useState(null);//для тачпада

  return (
    <div className={s.slider}>

      {items.map((item, slide) => {
        let position = 'nextSlide';
        if (slide === currentSlide) {
          position = 'activSlide';
        }
        if (
          slide === currentSlide - 1 ||
          (currentSlide === 0 && slide === items.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <div className={position} key={items[slide].id}>
            <SlideItem src={items[slide].src} />;
          </div>
        );
      })}
      <div className={s.slider__arrows}>
        <Prev className={s['slider__arrow']} />
        <Next className={s['slider__arrow']} />
      </div>
      {/* <DotList /> */}
    </div>
  );
};
