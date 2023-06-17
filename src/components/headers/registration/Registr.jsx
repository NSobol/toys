import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import { getNotification } from '../../notification/Notification';
import { ReactComponent as Eye } from './../../../images/eye.svg';
import { ReactComponent as EyeClose } from './../../../images/eye_close.svg';
import './registrStyle.css';

export const Registr = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [type, setType] = useState(false);
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
        <div className='field-form-div-pass'>
          <label className='text-form-div'> Пароль: </label>
          <input
            className='form-field-input'
            type={!type ? 'password' : 'text'}
            id='password'
            name='password'
            placeholder='Пароль'
            {...register('password', { required: true })}
          />
          <span onClick={() => setType(!type)} className='form__pass__icon'>
            {type ? (
              <Eye />
            ) : (
              <EyeClose />
            )}
          </span>
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
