import React from 'react';
import { BannerContent } from './bannerContent/BannerContent';
import { CardList } from './cardList/CardList';
import { Advantages } from './advantages/Advantages';

export const Content = ( props ) => {
  return (
    <div>
      <BannerContent />
      <CardList products={props.products}  />
      <Advantages />
    </div>
  );
};
