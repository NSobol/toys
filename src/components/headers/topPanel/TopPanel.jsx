import React from 'react';
import { NavPanel } from './../navigationPanel/NavPanel';
import { Registr } from './../registration/Registr';
import { Autoriz } from './../autorization/Autoriz';
import style from './topPanel.module.css';

export const TopPanel = () => {
  return (
    <div className={style.topPanel}>
      <NavPanel />
      <div className={style.autoriz}>
        <Registr /> /
        <Autoriz />
      </div>
    </div>
  );
};
