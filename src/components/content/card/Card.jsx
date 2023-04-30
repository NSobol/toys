import React from 'react';
import { ReactComponent as Like } from '../../../images/like.svg'
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
    getHandlerLiks
  } = props;
	const isСhosen = likes.some((e) => e === props.userId);
	const getClickLiks = () => {
    getHandlerLiks(product, isСhosen);
  };
  return (
    <div className={style.cardItem}>
      <div className='card_header'>
        <button
          onClick={getClickLiks}
          className={`card__сhosen ${isСhosen ? 'card__сhosen_active' : ''}`}
        >
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
