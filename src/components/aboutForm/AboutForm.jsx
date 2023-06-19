import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { getNotification } from '../notification/Notification';
import { api } from '../../utils/api';
import s from './aboutForm.module.css';
import { ProductsContext } from '../../context/productsContext';

export const AboutForm = () => {
  const { setUser, setActive } = useContext(ProductsContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.getResetUserNameAbout({
        name: data.name,
        about: data.about,
      });
      const res = api.getMyUserInfo();
      getNotification('success', 'Успешно', "Данные успешно изменены");
      setActive(false);
      setUser(res);
      return;
    } catch (error) {
      getNotification('error', 'Ошибка', `${error.message}`);
    }
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formTitle}>Изменение информации обо мне</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fieldFormDiv}>
          <label className='text-form-div'>Моё имя</label> <br />
          <input
            className={s.formFieldInput}
            type='text'
            id='name'
            name='name'
            placeholder='Имя или ФИО'
            required
            {...register('name')}
          />
        </div>
        <div className={s.fieldFormDiv}>
          <label className='text-form-div'>Обо мне</label> <br />
          <input
            className={s.formFieldInput}
            type='text'
            id='about'
            name='about'
            placeholder='О Вас'
            required
            {...register('about')}
          />
        </div>
        <input className={s.formBtn} type='submit' />
      </form>
    </div>
  );
};
