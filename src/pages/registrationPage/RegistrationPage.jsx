import React from 'react';
import { Modal } from '../../components/modal/Modal';
import { Registr } from '../../components/headers/registration/Registr';
import { Main } from '../../components/main/Main';

export const RegistrationPage = ({ active, setActive }) => {
  return (
    <div className='registration'>
      <Main />

      <Modal active={active} setActive={setActive}>
        <Registr setActive={setActive} />
      </Modal>
    </div>
  );
};
