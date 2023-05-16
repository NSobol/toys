import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../../utils/api';
import './autoriz.css';

export const Autoriz = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api.getAuthorizedUser(data);
  };
  return (
    <div className='createModalForm'>
      <h2 className='createModalFormTitle'>Вход</h2>
      <form className='modalForm' onSubmit={handleSubmit(onSubmit)}>
        <div className='field-form-div'>
          <label className='text-form-div'> Ваш email: </label> <br />
          <input
            className='form-field-input'
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span style={{ color: 'red' }}>*Email* is mandatory </span>
          )}
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'> Пароль: </label> <br />
          <input
            className='form-field-input'
            type='password'
            id='password'
            name='password'
            placeholder='Пароль'
            required
            {...register('password')}
          />
        </div>
        <br />
        <div className='button-form-duble-two'>
          <button type='submit' className='btn button-form-submit'>
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
