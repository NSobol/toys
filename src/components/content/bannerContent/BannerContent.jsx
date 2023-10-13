import React from 'react';
import './Banner.css';
import Banner from '../../../images/dergileva-1300x409.webp';

export const BannerContent = () => {
  return (
    <div>
      <img className='bannerPic' src={Banner} alt='banner' />
    </div>
  );
};
