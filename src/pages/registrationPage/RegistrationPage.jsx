import React, { useContext } from 'react';
import { Modal } from '../../components/modal/Modal';
import { Registr } from '../../components/headers/registration/Registr';
import { Main } from '../../components/main/Main';
import { ProductsContext } from '../../context/productsContext';

export const RegistrationPage = () => {
	const { active, setActive } = useContext(ProductsContext);
  return (
    <div className='registration'>
      <Main />

      <Modal active={active} setActive={setActive}>
        <Registr />
      </Modal>
    </div>
  );
};
