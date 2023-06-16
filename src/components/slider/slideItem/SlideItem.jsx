import React from 'react';
import s from './slideItem.module.css';

export const SlideItem = ({ src }) => {
  return (
    <>
      <img src={src} alt='баннер' className={s.bannerPic} />
    </>
  );
};
