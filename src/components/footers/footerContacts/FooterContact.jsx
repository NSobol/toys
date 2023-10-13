import React from 'react';
import { Telephone } from '../telephone/Telephone';
import { BlockIcon } from '../blockIcon/BlockIcon';
import s from './footerContacts.module.css';

export const FooterContact = () => {
  return (
    <div className={s.contaiter}>
      <p className={s.title}>Наши контакты</p>
      <Telephone />
      <BlockIcon />
    </div>
  );
};
