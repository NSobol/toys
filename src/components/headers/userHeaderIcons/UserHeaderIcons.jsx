import React from 'react';
import s from './UserHeaderIcons.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as FavoritIcon} from "./../../../images/heart.svg"
import {ReactComponent as BasketIcon} from "./../../../images/basket_icon.svg"
import {ReactComponent as UserIcon} from "./../../../images/user.svg"

export const HeaderIcons = () => {
  return (
    <div className={s.header__icons}>
      <Link to = {`/selectes`}><div><FavoritIcon className={s.favoritIcon}/></div></Link>
      <Link to = {'/basket'}><div><BasketIcon className={s.favoritIcon}/></div></Link>
      <Link to = {'/profile'}><div><UserIcon className={s.favoritIcon}/></div></Link>
    </div>
  );
};
