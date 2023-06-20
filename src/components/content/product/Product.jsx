import React, { useContext, useState } from 'react';
import s from './Product.module.css';
import { ReactComponent as Like } from './../../../images/like.svg';
import { Modal } from './../../modal/Modal';
import { FormReview } from '../../formReview/FormReview';
import { ProductsContext } from '../../../context/productsContext';
import { getCorrectWordEnding } from '../../../utils/function';
import { Rate } from '../../Rate/Rate';
import { getDiscountPrice } from './../../../utils/function';
import { getNotification } from '../../notification/Notification';

export const Product = ({ product, setProduct, reviews, getLiks }) => {
  const [count, setCount] = useState(0);
  const { active, setActive, productRating, user, basket, setBasket } =
    useContext(ProductsContext);

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const plus = () => {
    setCount((prev) => prev + 1);
  };

  let isСhosen = product.likes.some((e) => e === user._id);

  const getClickLiks = () => {
    getLiks(product, isСhosen);
  };

  const сhosen = isСhosen ? 'card__сhosen_active' : 'card__сhosen';

  const buy = (count) => {
    if (count > 0) {
      setBasket((prev) => {
        const test = prev.filter((el) => el.id === product._id);
        if (test.length) {
          return prev.map((el) => {
            if (el.id === product._id) {
              el.cnt += count;
            }
            return el;
          });
        } else {
          return [...prev, { id: product._id, product: product, cnt: count }];
        }
      });
    } else {
      setBasket((prev) => [
        ...prev,
        { id: product._id, product: product, cnt: 1 },
      ]);
      getNotification(
        'success',
        'Успешно',
        'В корзину добавлен товар в количестве 1шт'
      );
    }
  };
  localStorage.setItem('basket', JSON.stringify(basket));

  return (
    <div className={s.cardProduct__container}>
      <div className={s.cardProduct}>
        <div className={s.leftBar}>
          <img
            className={s.product__img}
            src={product.pictures}
            alt='картинка'
          />
        </div>
        <div className={s.rightBar}>
          <h2 className={s.product__title}>{product.name}</h2>
          <div className={s.rating}>
            <Rate rating={productRating(reviews)} />
            <div>
              {product.reviews?.length}
              {getCorrectWordEnding(product.reviews?.length, 'отзыв')}
            </div>
          </div>
          <p className={s.rightBarP}>Описание: {product.description}</p>
          <p className={s.rightBarP}>Ед. измерения: {product.wight}</p>
          <div className={s.cardDics}>
            Цена: 
            <b>
              {
                <div className={s.cardDesc}>
                  <span
                    className={`${s.price} ${
                      !!product.discount ? s.oldPrice : ''
                    }`}
                  >
                    {product.price}&nbsp;p
                  </span>
                  {!!product.discount && (
                    <span
                      className={`${s.price} ${
                        !!product.discount ? s.newPrice : ''
                      }`}
                    >
                      {getDiscountPrice(product.discount, product.price)}&nbsp;p
                    </span>
                  )}
                </div>
              }
            </b>
          </div>
          <div className={s.likedBlock}>
            <button onClick={getClickLiks} className={s[`${сhosen}`]}>
              <Like />
            </button>
            <span>{isСhosen ? 'В избранном' : 'В избранное'}</span>
          </div>
          <div className={s.inCase}>
            <div className={s.inCaseControls}>
              <button
                className={s.inCaseMinus}
                disabled={count <= 0 ? true : false}
                onClick={minus}
              >
                <span className={s.minusText}>-</span>
              </button>
              <span className={s.caseText}>{count}</span>
              <button
                className={s.inCasePlus}
                onClick={plus}
                disabled={count === product.stock ? true : false}
              >
                <span className={s.plusText}>+</span>
              </button>
            </div>
            <button className={s.inCaseBasket} onClick={() => buy(count)}>
              В корзину
            </button>
          </div>
        </div>
      </div>

      <div className={s.productReviews}>
        <div className={s.productReviews__header}>
          <h3>Отзывы:</h3>
          <button
            className={s.reviewsButton}
            onClick={() => {
              setActive(true);
            }}
          >
            <span>Написать отзыв</span>
          </button>
        </div>
      </div>
      <Modal active={active} setActive={setActive} product={product}>
        <FormReview
          product={product}
          setProduct={setProduct}
          setActive={setActive}
        />
      </Modal>
    </div>
  );
};
