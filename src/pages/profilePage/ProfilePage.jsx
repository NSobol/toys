import React, { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { ComeBack } from '../../components/comeBack/ComeBack';
import { Tooltip } from 'react-tooltip';
import { ReactComponent as Pensil } from './../../images/edit.svg';
import s from './profile.module.css';

export const ProfilePage = () => {
  const { user } = useContext(ProductsContext);
  const { avatar, name, about, email } = user;

  return (
    <div className={s.container}>
      <ComeBack />
      <h2 className={s.title}>Профиль пользователя</h2>
      <div className={s.block}>
        <div className={s.avatarBox}>
          <img src={avatar} alt='Аватар' className={s.avatar} />
          <button className={s.change} onClick={() => console.log('Click')}>
            <Pensil
              className={s.btnChange}
              data-tooltip-id='btnChangeAvatar'
              data-tooltip-content='Сменить аватар'
            />
          </button>
          <Tooltip id='btnChangeAvatar' place='top' variant='info' />
        </div>
        <div className={s.profileBox}>
          <h3 className={s.name}>{name}</h3>
          <p className={s.email}>{email}</p>
          <p className={s.about}>{about}</p>

          <button
            className={s.changeAbout}
            onClick={() => console.log('Click')}
          >
            <Pensil
              className={s.btnChange}
              data-tooltip-id='btnChangeAbout'
              data-tooltip-content='Изменить имя и информацию обо мне'
            />
          </button>
          <Tooltip id='btnChangeAbout' place='top' variant='info' />
        </div>
      </div>
    </div>
  );
};
