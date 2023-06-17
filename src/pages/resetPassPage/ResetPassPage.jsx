import React, { useContext } from 'react';
import { Main } from '../../components/main/Main';
import { Modal } from '../../components/modal/Modal';
import { ResetPassword } from '../../components/resetPassowrForm/ResetPassword';
import { ProductsContext } from '../../context/productsContext';

export const ResetPassPage = () => {
	const { active, setActive } = useContext(ProductsContext);
  return (
    <div className='resetPass'>
      <Main />
      <Modal active={active} setActive={setActive}>
        <ResetPassword />
      </Modal>
    </div>
  );
};
