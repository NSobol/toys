import React from "react";
import { api } from "./../../utils/api";
import { useForm } from "react-hook-form";

export const ReviewForm = (props) => {
  const { register, handleSubmit } = useForm();
//  const productId = props.prodId;
  const onSubmit = (productId, data) => {
    // console.log(productId, data);
    api.getAddReviewOfProduct(productId, data);
  };
  return (
    <div className="formContainer">
      <h2>Создание отзыва</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label> Укажите рейтинг товара </label> <br />
        <input
          type="number"
          min="1"
          max="5"
          id="rate"
          name="rating"
          placeholder="Рейтинг товара"
          required
          {...register("rating", { required: true })}
        />
        <br />
        <textarea
          name="text"
          type="text"
          placeholder="Введите Ваш отзыв"
          className="form__input"
          {...register("text")}
        />
        <div className="form__btns">
        <input type="submit" />
        <input type="reset" />
        </div>
      </form>
    </div>
  );
};
