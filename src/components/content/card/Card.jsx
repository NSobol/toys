import React from 'react';
// import { ReactComponent as Like } from '../../../images/like.svg'
import style from './Card.module.css';

export const Card = (props) => {
  return (
    <div className={style.cardItem}>
      <img className={style.imageItem} src={props.pictures} alt='картинка' />
      <p>Название: {props.name}</p>
      <p>Ед. измерения: {props.wight}</p>
      <p>Цена: {props.price}p</p>
      <br />

      <button className={style.buttonItem}>В корзину</button>
    </div>
  );
};
