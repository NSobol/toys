import React, { useContext } from 'react';
import { Modal } from '../../components/modal/Modal';
import { Main } from '../../components/main/Main';
import { Autoriz } from '../../components/headers/autorization/Autoriz';
import { ProductsContext } from '../../context/productsContext';

export const AutorizedPage = () => {
const { active, setActive } = useContext(ProductsContext);
  return (
    <div className='autorized'>
      <Main />
      <Modal active={active} setActive={setActive}>
        <Autoriz />
      </Modal>
    </div>
  );
};
