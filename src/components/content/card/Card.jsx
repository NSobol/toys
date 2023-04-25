import React from 'react';
// import { ReactComponent as Like } from '../../../images/like.svg'
import style from './Card.module.css';

export const Card = (props) => {
  return (
    <div className={style.cardItem}>
      <img className={style.imageItem} src={props.pictures} alt='картинка' />
      <p>Название: </p>
      <p>{props.name}</p>
      <p>Ед. измерения:{props.wight}</p>
      <p>Цена: </p>
      <p>{props.price}p</p>
      <br />

      <button className='buttonItem'>В корзину</button>
    </div>
  );
};
