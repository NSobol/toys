import React from 'react'
import robot from '../../../images/robot.gif'
import catalog from '../../../images/catalog.png'
import stock from '../../../images/stock.png'
import destinations from '../../../images/destinations.gif'
import './Adv.css'

export const Advantages = () => {
  return (
    <div className='advantes'>
        <h2 className='textTypeTwo'>НАШИ ПРЕИМУЩЕСТВА</h2>
        <div className='advantesContent'>
            <div className='advantesBlock'><img className='advantesImg' src={stock} alt="" /><h3 className='advantesTyple'>Широкий ассортимент</h3><p className='advantesText'>cотни тысяч товаров для детей разных возрастов</p></div>
            <div className='advantesBlock'><img className='advantesImg' src={destinations} alt="" /><h3 className='advantesTyple'>Быстрая доставка</h3><p className='advantesText'>доставляем продукцию в кратчайшие сроки</p></div>
            <div className='advantesBlock'><img className='advantesImg' src={robot} alt="" /><h3 className='advantesTyple'>Собственное производство</h3><p className='advantesText'>создаём качественные игрушки и товары для детей</p></div>
            <div className='advantesBlock'><img className='advantesImg' src={catalog} alt="" /><h3 className='advantesTyple'>Удобный каталог</h3><p className='advantesText'>специально спроектированная система заказа на сайте</p></div>
        </div>
    </div>
  )
}
