import React from 'react';
import { Main } from '../../components/main/Main';
import { Modal } from '../../components/modal/Modal';
import { ResetPassword } from '../../components/resetPassowrForm/ResetPassword';

export const ResetPassPage = ({ active, setActive }) => {
  return (
    <div className='resetPass'>
      <Main />
      <Modal active={active} setActive={setActive}>
        <ResetPassword />
      </Modal>
    </div>
  );
};
