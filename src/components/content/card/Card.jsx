import React from 'react';
// import { ReactComponent as Like } from '../../../images/like.svg'
import style from './Card.module.css';

export const Card = (props) => {
  return (
    <div className={style.cardItem}>
      <div className={style.cardPictures}>
        <img className={style.imageItem} src={props.pictures} alt='картинка' />
      </div>
      <div className={style.cardText}>
        <p className={style.titleItem}>Название: {props.name}</p>
        <p>Ед. измерения: {props.wight}</p>
        <p>Цена: <b>{props.price} p</b></p>
        <br />
      </div>
      <button className={style.buttonItem}>В корзину</button>
    </div>
  );
};
