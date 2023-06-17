import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from './../../../utils/api';
import './autoriz.css';
import { Link, useNavigate } from 'react-router-dom';
import { getNotification } from '../../notification/Notification';
import { ProductsContext } from '../../../context/productsContext';
import { ReactComponent as Eye } from './../../../images/eye.svg';
import { ReactComponent as EyeClose } from './../../../images/eye_close.svg';

export const Autoriz = () => {
  const { setIsAuthorized } = useContext(ProductsContext);
  const [type, setType] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.getAuthorizedUser(data);
      localStorage.setItem('myToken', res.token);
      setIsAuthorized(true);
      navigate('/');
      getNotification('success', 'Успешно', 'Вы авторизованы');
    } catch (error) {
      getNotification('error', 'Ошибка', 'Неправильные почта или пароль');
    }
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
          {errors?.email && (
            <span style={{ color: 'red' }}>*Email* обязателен! </span>
          )}
        </div>
        <br />
        <div className='field-form-div-pass'>
          <label className='text-form-div'> Пароль: </label> <br />
          <input
            className='form-field-input'
            type={!type ? 'password' : 'text'}
            id='password'
            name='password'
            placeholder='Пароль'
            required
            {...register('password')}
          />
          <span onClick={() => setType(!type)} className='form__pass__icon'>
            {type ? <Eye /> : <EyeClose />}
          </span>
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
      <div className='relocation'>
        <span>Нет аккаунта?</span>{' '}
        <Link to={'/registr'}>Зарегистрироваться</Link>
      </div>
      <div className='relocation'>
        <span>Забыт пароль?</span>{' '}
        <Link to={'/passReset'}>Восстановление пароля</Link>
      </div>
    </div>
  );
};
