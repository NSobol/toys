import React from 'react';
import { ReactComponent as Like } from './../../../images/likeheart.svg';
import style from './Card.module.css';
import { ProductsContext } from '../../../context/productsContext';
import { useContext } from 'react';

export const Card = ({ product }) => {
	const { handlerLiks, user } = useContext(ProductsContext);
	
	let isСhosen = product.likes.some((e) => e === user._id);
	
  const getClickLiks = () => {
    handlerLiks(product, isСhosen);
  };

	const сhosen = isСhosen ? 'card__сhosen card__сhosen_active' : 'card__сhosen';
  return (
    <div className={style.cardItem}>
      <div className='card_header'>
        <button onClick={getClickLiks} className={style[`${сhosen}`]}>
          <Like />
        </button>
      </div>

      <div className={style.cardPictures}>
        <img
          className={style.imageItem}
          src={product.pictures}
          alt='картинка'
        />
      </div>
      <div className={style.cardText}>
        <p className={style.titleItem}>Название: {product.name}</p>
        <p>Ед. измерения: {product.wight}</p>
        <p>
          Цена: <b>{product.price} p</b>
        </p>
        <br />
      </div>
      <button className={style.buttonItem}>В корзину</button>
    </div>
  );
};
