import React from 'react';
import { ReactComponent as Like } from '../../../images/likeheart.svg';
import style from './Card.module.css';

export const Card = (props) => {
  const {
    name,
    price,
    wight,
    pictures,
    likes,
    discount,
    userId,
    product,
    handlerLiks
  } = props;

  const isСhosen = likes.some((e) => e === userId);

  const getClickLiks = () => {
   handlerLiks(product, isСhosen);
  };

  const сhosen = isСhosen ? 'card__сhosen_active' : 'card__сhosen';
 
  return (
    <div className={style.cardItem}>
      <div className='card_header'>
        <button onClick={getClickLiks} className={style[`${сhosen}`]}>
          <Like />
        </button>
      </div>

      <div className={style.cardPictures}>
        <img className={style.imageItem} src={pictures} alt='картинка' />
      </div>
      <div className={style.cardText}>
        <p className={style.titleItem}>Название: {name}</p>
        <p>Ед. измерения: {wight}</p>
        <p>
          Цена: <b>{price} p</b>
        </p>
        <br />
      </div>
      <button className={style.buttonItem}>В корзину</button>
    </div>
  );
};
