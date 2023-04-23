import React from 'react'
import { ReactComponent as Like } from '../../../images/like.svg'
import style from './Card.module.css'

export const Card = ({props}) => {
  
  return (
    <div className = {style.cardItem}>
     
        <img className = {style.imageItem} src="https://raw.githubusercontent.com/MerkucioZemba/Pictures/main/images/ufo.jpg" alt="картинка" />
        <p>Название: </p>
        <p>НЛО</p>
        <p>Ед. измерения: шт</p>
        <p>Цена: </p>
        <p>1300р</p>
        <br />
     
      <button className = "buttonItem">В корзину</button>
    </div>
  )
}
