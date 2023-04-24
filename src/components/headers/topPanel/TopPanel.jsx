import React, { useState } from 'react';
import { NavPanel } from './../navigationPanel/NavPanel';
import { Registr } from '../registration/Registr';
import { Modal } from './../../modal/Modal';
import style from './topPanel.module.css';
import { Autoriz } from '../autorization/Autoriz';

export const TopPanel = () => {
	const [modalActive, setModalActive] = useState(false);
	const [valueChildren, setValueChildren] = useState('');
  return (
    <div className={style.topPanel}>
      <NavPanel />
      <div className={style.autoriz}>
			  <button
				  className={style.registrBtn}
				  onClick={() => { setModalActive(true); setValueChildren("reg") }}
        >
          Регистрация
        </button>
        /
        <button
          className={style.registrBtn}
          onClick={() => {
            setModalActive(true);
            setValueChildren('auto');
          }}
        >
          Вход
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
          {valueChildren === 'reg' ? <Registr /> : <Autoriz />}
        </Modal>
      </div>
    </div>
  );
};
