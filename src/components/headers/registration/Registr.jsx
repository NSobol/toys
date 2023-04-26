import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../../utils/api';
import './registrStyle.css';

export const Registr = () => {
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
      <h2 className="formTitle">Регистрация</h2>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label> Ваше имя: </label> <br />
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Ваше имя'
          required
          {...register('name')}
        />
        <br />
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
        <label> О себе: </label> <br />
        <input
          type='text'
          id='about'
          name='about'
          required
          {...register('about')}
        />
        <br />
        <input
          className='hidden'
          type='text'
          id='group'
          name='group'
          value='group-12'
          {...register('group')}
        />
        <input type='submit' className='formBtnSub' />
        <input type='reset' />
      </form>
    </div>
  );
};
