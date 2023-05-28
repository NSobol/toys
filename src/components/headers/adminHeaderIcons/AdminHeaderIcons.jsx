import { useContext } from 'react';
import style from './adminHeaderIcons.module.css';
import add from './../../../images/add.png';
import { Modal } from './../../modal/Modal';
import './../../modal/modal.css';
import { PopapAddCartProduct } from './../../popapAddCartProduct/PopapAddCartProduct';
import { ProductsContext } from '../../../context/productsContext';

export const AdminHeaderIcons = () => {
const { active, setActive } = useContext(ProductsContext);
	
  return (
    <div>
      <button className={style.btn} onClick={() => setActive(true)}>
        <img src={add} alt='Добавить' />
      </button>

		  {active && <Modal active={active} setActive={setActive}>
			  <PopapAddCartProduct />
		  </Modal>}
    </div>
  );
};
