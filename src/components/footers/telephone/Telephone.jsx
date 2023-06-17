import React from 'react';
import phone from '../../../images/phone.png';
import s from './Phone.module.css';

export const Telephone = () => {
  return (
    <div className={s.phoneBlock}>
      <img className={s.phonepic} src={phone} alt='telephone' />
      <p className={s.numberPhone}>+79999999999</p>
    </div>
  );
};
