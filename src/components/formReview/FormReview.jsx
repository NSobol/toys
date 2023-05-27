import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../utils/api';
import s from './formReview.module.css';
import { FormRating } from '../content/rating/Rating';

export const FormReview = ({ product, setProduct, setActive }) => {
  const { register, handleSubmit } = useForm();
  const productId = product._id;
  const onSubmit = (data) => {
    api
      .getAddReviewOfProduct(productId, data)
      .then((data) => setProduct({ ...data }))
      .catch(() => console.log('err'));
  };
  return (
    <div className={s.formContainer}>
      <h2>Создание отзыва</h2>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <FormRating />
        <textarea
          name='text'
          type='text'
          placeholder='Введите Ваш отзыв'
          className='form__input'
          {...register('text')}
        />
        <div className={s.form__btns}>
          <button
            type='submit'
            onClick={() => {
              setActive(false);
            }}
          >
            Отправить
          </button>
          <input type='reset' />
        </div>
      </form>
    </div>
  );
};
