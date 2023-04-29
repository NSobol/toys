import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../utils/api.js';
import './popapAddCartProduct.css';

export const PopapAddCartProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api.getAddProduct(data);
  };
  return (
    <div className='createModalForm'>
      <h2 className='createModalFormTitle'>Создание</h2>
      <form className='modalForm' onSubmit={handleSubmit(onSubmit)}>
        <label>Доступность</label>
        <input
          type='checkbox'
          id='available'
          name='available'
          {...register('available')}
        />
        <br />
        <label>Ссылка на изображение</label>
        <input
          type='text'
          id='pictures'
          name='pictures'
          {...register('pictures')}
        />
        <br />
        <label>Название товара</label>
        <input
          id='name'
          name='name'
          type='text'
          {...register('name', { required: true })}
        />
        <br />
        <label>Цена</label>
        <input
          id='price'
          name='price'
          type='number'
          {...register('price', { required: true })}
        />
        <br />
        <label>Скидка</label>
        <input
          id='discount'
          name='discount'
          type='number'
          {...register('discount')}
        />
        <br />
        <label>Количество на складе</label>
        <input id='stock' name='stock' type='number' {...register('stock')} />
        <br />
        <label>Единицы измерения</label>
        <input id='wight' name='wight' type='text' {...register('wight')} />
        <br />
        <label>Описание товара</label>
        <input
          id='description'
          name='description'
          type='text'
          {...register('description', { required: true })}
        />
        <br />
        <button type='submit' className='button-form-submit'>
          Ok
        </button>
        <button type='reset' className='button-form-close'>
          Очистить
        </button>
      </form>
    </div>
  );
};
