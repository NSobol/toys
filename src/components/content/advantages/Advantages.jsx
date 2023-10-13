import React from 'react';
import robot from '../../../images/robot.gif';
import catalog from '../../../images/catalog.png';
import stock from '../../../images/stock.png';
import destinations from '../../../images/destinations.gif';
import s from './Adv.module.css';

export const Advantages = () => {
  return (
    <div className={s.advantes}>
      <h2 className={s.textTypeTwo}>НАШИ ПРЕИМУЩЕСТВА</h2>
      <div className={s.advantesContent}>
        <div className={s.advantesBlock}>
          <img className={s.advantesImg} src={stock} alt='' />
          <h3 className={s.advantesTyple}>Широкий ассортимент</h3>
          <p className={s.advantesText}>
            cотни тысяч товаров для детей разных возрастов
          </p>
        </div>
        <div className={s.advantesBlock}>
          <img className={s.advantesImg} src={destinations} alt='' />
          <h3 className={s.advantesTyple}>Быстрая доставка</h3>
          <p className={s.advantesText}>
            доставляем продукцию в кратчайшие сроки
          </p>
        </div>
        <div className={s.advantesBlock}>
          <img className={s.advantesImg} src={robot} alt='' />
          <h3 className={s.advantesTyple}>Собственное производство</h3>
          <p className={s.advantesText}>
            создаём качественные игрушки и товары для детей
          </p>
        </div>
        <div className={s.advantesBlock}>
          <img className={s.advantesImg} src={catalog} alt='' />
          <h3 className={s.advantesTyple}>Удобный каталог</h3>
          <p className={s.advantesText}>
            специально спроектированная система заказа на сайте
          </p>
        </div>
      </div>
    </div>
  );
};
