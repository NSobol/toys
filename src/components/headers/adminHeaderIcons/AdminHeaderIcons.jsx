import React from 'react';
import { ButtonIcon } from '../button/ButtonIcon';
import './adminHeaderIcons.module.css';
import add from './../../../images/add.png';
import updates from './../../../images/update.png';
import deletes from './../../../images/delete.png';

export const AdminHeaderIcons = () => {
  return (
    <div>
      <ButtonIcon src={add} alt='Добавить' />
      <ButtonIcon src={updates} alt='Изменить' />
      <ButtonIcon src={deletes} alt='Удалить' />
    </div>
  );
};
