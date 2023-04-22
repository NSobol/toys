import React from 'react'
import { BannerContent } from './bannerContent/BannerContent'
import { CardList } from './cardList/CardList'
import { Advantages } from './advantages/Advantages'

export const Content = () => {
  return (
    <div>
        <BannerContent/>
        <CardList/>
        <Advantages/>
    </div>
  )
}
