import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../../utils/api';
import './registrStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { getNotification } from '../../notification/Notification';

export const Registr = ({ setActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
     await api.getRegisteredUser(data);
      navigate('/login');
      getNotification(
        'success',
        'Успешно',
        'Вы зарегистрированы! Пожалуйста войдите!'
      );
    } catch (error) {
      getNotification('error', 'Ошибка', 'Ошибка регистрации');
    }
  };
  return (
    <div className='createModalForm'>
      <h2 className='createModalFormTitle'>Регистрация</h2>
      <form className='modalForm' onSubmit={handleSubmit(onSubmit)}>
        <div className='field-form-div'>
          <label className='text-form-div'> Ваш email: </label>
          <input
            className='form-field-input'
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span style={{ color: 'red' }}>*Email* is mandatory </span>
          )}
        </div>
        <br />
        <div className='field-form-div'>
          <label className='text-form-div'> Пароль: </label>
          <input
            className='form-field-input'
            type='password'
            id='password'
            name='password'
            placeholder='Пароль'
            {...register('password', { required: true })}
          />
        </div>
        <br />
        <input
          className='hidden'
          type='text'
          id='group'
          name='group'
          value='group-12'
          {...register('group')}
        />
        <div className='button-form-duble-two'>
          <button type='submit' className='btn button-form-submit'>
            Ok
          </button>
          <button type='reset' className='btn button-form-close'>
            Очистить
          </button>
        </div>
      </form>
      <div className='relocation'>
        <span>Есть аккаунт?</span> <Link to={'/login'}>Войти</Link>
      </div>
    </div>
  );
};
