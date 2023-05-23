import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../utils/api.js';
import './popapAddCartProduct.css';
import { ProductsContext } from '../../context/productsContext.jsx';

export const PopapAddCartProduct = () => {
  const { setActive } = useContext(ProductsContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api.getAddProduct(data);
  };
  return (
    <div className='createModalForm'>
      <h2 className='createModalFormTitle'>Создание</h2>
      <form className='modalForm' onSubmit={handleSubmit(onSubmit)}>
        <div className='field-form-div'>
          <label className='text-form-div'>Ссылка на изображение</label>
          <input
            className='form-field-input'
            type='text'
            id='pictures'
            name='pictures'
            {...register('pictures')}
          />
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'>Название товара</label>{' '}
          <input
            className='form-field-input'
            id='name'
            name='name'
            type='text'
            {...register('name', { required: true })}
          />
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'>Цена</label>
          <input
            className='form-field-input'
            id='price'
            name='price'
            type='number'
            {...register('price', { required: true })}
          />
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'>Скидка</label>
          <input
            className='form-field-input'
            id='discount'
            name='discount'
            type='number'
            {...register('discount')}
          />
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'>Количество на складе</label>
          <input
            className='form-field-input'
            id='stock'
            name='stock'
            type='number'
            {...register('stock')}
          />
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'>Единицы измерения</label>{' '}
          <input
            className='form-field-input'
            id='wight'
            name='wight'
            type='text'
            {...register('wight')}
          />
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'>Описание товара</label>{' '}
          <input
            className='form-field-input'
            id='description'
            name='description'
            type='text'
            {...register('description', { required: true })}
          />{' '}
        </div>
        <br />
        <div className='button-form-duble'>
          <button
            type='submit'
            className='btn button-form-submit'
            onClick={() => {
              setActive(false);
            }}
          >
            Ok
          </button>
          <button type='reset' className='btn button-form-close'>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};
