import React from 'react';
import { Modal } from '../../components/modal/Modal';
import { Main } from '../../components/main/Main';
import { Autoriz } from '../../components/headers/autorization/Autoriz';

export const AutorizedPage = ({ active, setActive, setIsAuthorized }) => {
  return (
    <div className='autorized'>
      <Main />
      <Modal active={active} setActive={setActive}>
        <Autoriz setIsAuthorized={setIsAuthorized} />
      </Modal>
    </div>
  );
};
