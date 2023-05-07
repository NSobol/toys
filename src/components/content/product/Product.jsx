import React from "react";
import "./Product.css";

export const Product = ({ product }) => {
 
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
          <button className="reviewsButton"><span>Написать отзыв</span></button>
        </div>
      </div>
    </div>
  );
};
