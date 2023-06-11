import React, { useContext } from 'react';
import { NavPanel } from './../navigationPanel/NavPanel';
import { Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../../context/productsContext';
import style from './topPanel.module.css';
import { ReactComponent as UserIcon } from './../../../images/user.svg';
import ExitIcon from './../../../images/exit.png';

export const TopPanel = () => {
  const { setActive, isAuthorized, user, setIsAuthorized } =
    useContext(ProductsContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('myToken');
    setIsAuthorized(false);
    navigate('/login');
  };

  return (
    <div className={style.topPanel}>
      {isAuthorized ? (
        <>
          <NavPanel />
          <div className={style.autoriz}>
            <UserIcon />
            <p className={style.userName}>{user.name}</p>
            <button className={style.exitBtn} onClick={logout}>
              <img src={ExitIcon} alt='Выход' className={style.exitIcon} />
            </button>
          </div>
        </>
      ) : (
        <>
          <NavPanel />
          <div className={style.autoriz}>
            <Link
              className={style.registrBtn}
              to={'/registr'}
              onClick={() => {
                setActive(true);
              }}
            >
              Регистрация
            </Link>
            /
            <Link
              to={'/login'}
              className={style.registrBtn}
              onClick={() => {
                setActive(true);
              }}
            >
              Вход
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
