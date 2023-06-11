import React from 'react';
import { ReactComponent as Smile } from './../../images/smile.svg';
import style from './main.module.css';
import { TopPanel } from '../headers/topPanel/TopPanel';

export const Main = () => {
  return (
    <div className={style.container}>
      <Smile className={style.smile} />
      <p className={style.title}>Упс... Что-то пошло не так </p>
      <p className={style.subTitle}>
        Пожалуйста зарегистрируйтесь или войдите....
      </p>

      <TopPanel />
    </div>
  );
};
