import React, { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { ComeBack } from '../../components/comeBack/ComeBack';
import s from './profile.module.css';

export const ProfilePage = () => {
  const { user } = useContext(ProductsContext);
  const { avatar, name, about, email, _id } = user;

  return (
    <div>
      <ComeBack />
      <h2 className={s.title}>Профиль пользователя</h2>
      <div className={s.container}>
        <div className={s.avatarBox}>
          <img src={avatar} alt='Аватар' className={s.avatar} />
          <button className={s.changeAvatar}>Сменить аватар</button>
        </div>
        <div className={s.profileBox}>
          <h3>{name}</h3>
          <p>{about}</p>
          <p>{email}</p>
          <p>id: {_id}</p>
          <button className={s.changeAbout}>
            Изменить имя и информацию обо мне
          </button>
        </div>
      </div>
    </div>
  );
};
