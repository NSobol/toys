import React from 'react';
import { useForm } from 'react-hook-form';
import { getNotification } from '../notification/Notification';
import { api } from '../../utils/api';
import s from './avatarForm.module.css';

export const AvatarForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.getResetUserAvatar({ avatar: data.avatar });
      getNotification('success', 'Успешно', `${res.message}`);
      return res;
    } catch (error) {
      getNotification('error', 'Ошибка', `${error.message}`);
    }
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formTitle}>Смена аватара</h2>
      <p className={s.formSubTitle}>
        Для изменения аватара введите URL-адрес изображения.
      </p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fieldFormDiv}>
          <input
            className={s.formFieldInput}
            type='text'
            id='avatar'
            name='avatar'
            placeholder='URL адрес нового аватара'
            required
            {...register('avatar', { required: true })}
          />
        </div>
        <input className={s.formBtn} type='submit' />
      </form>
    </div>
  );
};
