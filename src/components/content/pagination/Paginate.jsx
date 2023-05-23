import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../../context/productsContext';
import s from './paginate.module.css';

const Paginate = () => {
  const { products, productPerPage, setProductPerPage, setCurrentPage } =
    useContext(ProductsContext);

  const [value, setValue] = useState(8);

  const pageNumber = [];
  const arr = Array.from(products);
  const length = arr.length;
  let count = Math.ceil(length / productPerPage);
  for (let i = 1; i <= count; i++) {
    pageNumber.push(i);
  }

  const navigate = (numb) => {
    setCurrentPage(numb);
  };

  function handleChange(event) {
    setValue(event.target.value);
    setProductPerPage(event.target.value);
  }

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div className={s.paginationSelect}>
      <div className={s.select}>
        <p>Показывать на странице </p>
        <select
          className={s.selectCount}
          name='selectCount'
          id='selectCount'
          value={value}
          onChange={handleChange}
        >
          <option value='8'>8</option>
          <option value='16'>16</option>
          <option value='24'>24</option>
        </select>
        <p> товаров</p>
      </div>
      <div className={s.paginate}>
        <button className={s.bntPaginate} onClick={prevPage}>
          Предыдущая
        </button>
        <ul className={s.selectNumber}>
          {pageNumber.map((number) => (
            <li
              key={number}
              className={s['page-item']}
              onClick={() => navigate(number)}
            >
              {number}
            </li>
          ))}
        </ul>
        <button className={s.bntPaginate} onClick={nextPage}>
          Следующая
        </button>
      </div>
    </div>
  );
};

export default Paginate;
