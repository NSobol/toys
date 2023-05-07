import React, { useContext } from 'react';
import s from './UserHeaderIcons.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as FavoritIcon} from "./../../../images/heart.svg"
import {ReactComponent as BasketIcon} from "./../../../images/basket_icon.svg"
import {ReactComponent as UserIcon} from "./../../../images/user.svg"
import { ProductsContext } from '../../../context/productsContext';

export const HeaderIcons = () => {
  const { selected } = useContext(ProductsContext);
  const numberLike =
    selected.length > 9 ? 'numberLike_more' : 'numberLike_standart';
  
  return (
    <div className={s.header__icons}>
      <Link to = {`/selectes`}>
        <div className={s.favorit__container}>
          <FavoritIcon className={s.favoritIcon}/>
          {!!selected.length && <span className={s[`${numberLike}`]}>{selected.length}</span>}
        </div>
      </Link>
      <Link to = {'/basket'}><div><BasketIcon className={s.basketIcon}/></div></Link>
      <Link to = {'/profile'}><div><UserIcon className={s.userIcon}/></div></Link>
    </div>
  );
};
