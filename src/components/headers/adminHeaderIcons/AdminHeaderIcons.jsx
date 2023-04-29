import { useState } from 'react';
import style from './adminHeaderIcons.module.css';
import add from './../../../images/add.png';
import { Modal } from './../../modal/Modal';
import './../../modal/modal.css';
import { PopapAddCartProduct } from './../../popapAddCartProduct/PopapAddCartProduct';

export const AdminHeaderIcons = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <button className={style.btn} onClick={() => setModalActive(true)}>
        <img src={add} alt='Добавить' />
      </button>

      <Modal active={modalActive} setActive={setModalActive}>
        <PopapAddCartProduct />
      </Modal>
    </div>
  );
};
