import React, { useContext } from "react";
import s from "./Product.module.css";
import { Modal } from "./../../modal/Modal";
import { FormReview } from "../../formReview/FormReview";
import { ProductsContext } from "../../../context/productsContext";
import { Rating } from "../rating/Rating";
// import { getCorrectWordEnding } from "../../../utils/function";

export const Product = ({ product, setProduct, reviews=[]}) => {
  const { active, setActive } = useContext(ProductsContext);
//   const arrReview = product?.reviews ?? [];
  console.log(product.reviews.length);
    // console.log(arrReview.length);

  const getDiscountPrice = (discount, price) => {
    return (price - Math.floor((price * discount) / 100)).toFixed(0);
  };

  const productRating = (reviews) => {
    if (!reviews || !reviews.length) {
      return 0;
    }
    const res = reviews.reduce((acc, el) => (acc += el.rating), 0);
    return Math.floor(res / reviews.length);
  };

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
            <Rating />
            {/* <span>
              {product?.reviews.length}
              {getCorrectWordEnding(product?.reviews.length, "отзыв")}
            </span> */}
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
              }{' '}
            </b>
          </div>
          <div className={s.inCase}>
            <div className={s.inCaseControls}>
              <button className={s.inCaseMinus}>
                <span className={s.minusText}>-</span>
              </button>
              <span className={s.caseText}>0</span>
              <button className={s.inCasePlus}>
                <span className={s.plusText}>+</span>
              </button>
            </div>
            <button className={s.inCaseBasket}>В корзину</button>
          </div>
          {/* <button
            className={cn(s.favorite, { [s.favoriteActive]: isLikedProduct })}
            onClick={handleClick}
          >
            <Like />
            <span>{isLikedProduct ? "В избранном" : "В избранное"}</span>
          </button> */}
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
