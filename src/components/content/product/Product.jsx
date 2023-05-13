import React, { useState } from "react";
import "./Product.css";
import { ReviewForm } from "./../../ReviewForm/ReviewForm";
import { Modal } from "./../../modal/Modal";

export const Product = ({ product }) => {
  const [modalActive, setModalActive] = useState(false);

  const prodId=product._id;

  return (
    <div className="cardProduct">
      <div className="leftBar">
        <img className="product__img" src={product.pictures} alt="картинка" />
      </div>
      <div className="rightBar">
        <h2 className="product__title">{product.name}</h2>
        <p className="rightBarP">Описание: {product.description}</p>
        <p className="rightBarP">Ед. измерения: {product.wight}</p>
        <p className="rightBarP">
          Цена: <b>{product.price} p</b>
        </p>
        <div className="productReviews">
          <h3>Отзывы:</h3>
          <button
            className="reviewsButton"
            onClick={() => {
              setModalActive(true);
            }}
          >
            <span>Написать отзыв</span>
          </button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <ReviewForm productId={prodId}/>
      </Modal>
    </div>
  );
};
