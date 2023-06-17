import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import s from './resetPass.module.css';
import { api } from '../../utils/api';
import { getNotification } from '../notification/Notification';
import { ReactComponent as Eye } from './../../images/eye.svg';
import { ReactComponent as EyeClose } from './../../images/eye_close.svg';

export const ResetPassword = () => {
  const [type, setType] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [token, setToken] = useState(false);

  const onSubmit = async (data) => {
    if (data.token) {
      try {
        const res = await api.getResetPasswordToken(data);
        localStorage.setItem('token', res.token);
        getNotification(
          'success',
          'Успешно',
          'Пароль изменен! Пожалуйста войдите'
        );
        navigate('/login');
      } catch (error) {
        getNotification('error', 'Ошибка', `${error.message}`);
      }
    } else {
      try {
        await api.getResetPasswordMail(data);
        setToken(true);
        getNotification('success', 'Успешно', 'Письмо успешно отправлено');
      } catch (error) {
        getNotification('error', 'Ошибка', `${error.message}`);
      }
    }
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formTitle}>Восстановление пароля</h2>
      <p className={s.formSubTitle}>
        Для получения временного пароля необходимо <br /> ввести email,
        указанный при регистрации.
      </p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fieldFormDiv}>
          <label> Ваш email: </label> <br />
          <input
            className={s.formFieldInput}
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span style={{ color: 'red' }}>*Email* обязателен! </span>
          )}
        </div>
        {token ? (
          <>
            <div className={s.fieldFormDiv}>
              <label> Ваш токен: </label> <br />
              <input
                className={s.formFieldInput}
                type='text'
                {...register('token', { required: true })}
                placeholder='token'
              />
              {errors?.token && <span> {errors?.token.message}</span>}
            </div>
            <div className={s.fieldFormDivPass}>
              <label> Ваш пароль: </label> <br />
              <input
                className={s.formFieldInput}
                type={!type ? 'password' : 'text'}
                {...register('password', { required: true })}
                placeholder='password'
              />
              <span onClick={() => setType(!type)} className={s.formPassIcon}>
                {type ? <Eye /> : <EyeClose />}
              </span>
              {errors?.password && <span> {errors?.password.message}</span>}
            </div>
          </>
        ) : (
          <></>
        )}
        <input className={s.formBtn} type='submit' />
      </form>
      <div className={s.relocationPassword}>
        <span>Вспомнил пароль?</span> <Link to={'/login'}>Войти</Link>
      </div>
    </div>
  );
};
