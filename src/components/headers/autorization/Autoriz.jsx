import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../../utils/api';
// import style from './autoriz.module.css';

export const Autoriz = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api.getRegisteredUser(data);
  };
  return (
    <div className='formContainer'>
      <h2>Вход</h2>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label> Ваш email: </label> <br />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Ваш email'
          required
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span style={{ color: 'red' }}>*Email* is mandatory </span>
        )}
        <br />
        <label> Пароль: </label> <br />
        <input
          type='password'
          id='password'
          name='password'
          required
          {...register('password')}
        />
        <br />
        <input type='submit' />
        <input type='reset' />
      </form>
    </div>
  );
};
