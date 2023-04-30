import React from 'react'
// import { Content } from '../../components/content/Content'
import { ProductsContext } from '../../context/productsContext'
import { useContext } from 'react'
import { BannerContent } from './../../components/content/bannerContent/BannerContent';
import { CardList } from './../../components/content/cardList/CardList';
import { Advantages } from './../../components/content/advantages/Advantages';
import "./Catalog.css"

export const CatalogPage = () => {
  const {products, getHandlerLiks} = useContext(ProductsContext);
  return (
    <div className='catalog'>
      <BannerContent />
      <CardList products={products} getHandlerLiks={getHandlerLiks} />
      <Advantages />
    </div>
  )
}
