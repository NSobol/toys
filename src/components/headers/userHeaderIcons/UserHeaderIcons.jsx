import React, { useContext } from 'react';
import s from './UserHeaderIcons.module.css';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { ReactComponent as FavoritIcon } from './../../../images/heart.svg';
import { ReactComponent as BasketIcon } from './../../../images/basket_icon.svg';
import { ReactComponent as UserIcon } from './../../../images/user.svg';
import AdminIcon from './../../../images/admin.png';
import { ProductsContext } from '../../../context/productsContext';

export const HeaderIcons = () => {
  const { selected, admin, basket } = useContext(ProductsContext);
  const numberLike =
    selected.length > 9 ? 'numberLike_more' : 'numberLike_standart';

  return (
    <div className={s.header__icons}>
      <Link to={`/selectes`}>
        <div className={s.favorit__container}>
          <FavoritIcon
            className={s.favoritIcon}
            data-tooltip-id='favorit'
            data-tooltip-content='Избранное'
          />
          {!!selected.length && (
            <span className={s[`${numberLike}`]}>{selected.length}</span>
          )}
        </div>
      </Link>
      <Tooltip id='favorit' place='top' variant='info' />
      <Link to={'/basket'} className={s.basket__container}>
        <div>
          <BasketIcon
            className={s.basketIcon}
            data-tooltip-id='basket'
            data-tooltip-content='Корзина'
          />
          {!!basket.length && (
            <span className={s.basket}>{basket.length}</span>
          )}
        </div>
      </Link>
      <Tooltip id='basket' place='top' variant='info' />
      <Link to={'/profile'}>
        <div>
          <UserIcon
            className={s.userIcon}
            data-tooltip-id='profile'
            data-tooltip-content='Профиль пользователя'
          />
        </div>
      </Link>
      <Tooltip id='profile' place='top' variant='info' />
      {admin && (
        <Link to={'/admin'} data-tooltip='Админская'>
          <div>
            <img
              src={AdminIcon}
              alt='Иконка админа'
              className={s.userIcon}
              data-tooltip-id='admin'
              data-tooltip-content='Администраторская'
            />
          </div>
        </Link>
      )}
      <Tooltip id='admin' place='top' variant='info' />
    </div>
  );
};
