import React from 'react';
import { BannerContent } from './bannerContent/BannerContent';
import { CardList } from './cardList/CardList';
import { Advantages } from './advantages/Advantages';

export const Content = ({ products, getHandlerLiks }) => {
  return (
    <div className='content'>
      <BannerContent />
      <CardList products={products} getHandlerLiks={getHandlerLiks} />
      <Advantages />
    </div>
  );
};
