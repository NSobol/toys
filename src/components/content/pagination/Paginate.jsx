import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../../context/productsContext';
import './paginate.css';

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

  const navigate = (pageNumber, evt) => {
    setCurrentPage(pageNumber);
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
    <div className='paginationSelect'>
      <div className='select'>
        <p>Показывать на странице </p>
        <select
          className='selectCount'
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
      <div className='paginate'>
        <button className='bntPaginate' onClick={prevPage}>
          Предыдущая
        </button>
        <ul className='selectNumber'>
          {pageNumber.map((number) => (
            <li className='page-item' key={number}>
              <a
                href='!#'
                className='page-link'
                onClick={() => navigate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
        <button className='bntPaginate' onClick={nextPage}>
          Следующая
        </button>
      </div>
    </div>
  );
};

export default Paginate;