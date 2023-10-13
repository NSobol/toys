import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../context/productsContext';

export const Paginate = () => {
  const {products, productPerPage}= useContext(ProductsContext);
  const [currPageNo, setCurrPageNo] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [currPageProducts, setCurrPageProducts] = useState([]);
  const [pageNumberGroup, setPageNumberGroup] = useState([]);
  const [value, setValue] = useState(10);

  useEffect(() => {
    setCurrPageProducts(getPageData());
    setPageNumberGroup(getPageNumberGroup());
    console.log("run");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, currPageNo]);

  const nextPage = () => setCurrPageNo((prev) => prev + 1);
  const previousPage = () => setCurrPageNo((prev) => prev - 1);
  const changePageTo = (pageNumber) => setCurrPageNo(pageNumber);
  const getPageData = () => {
    const startIndex = currPageNo * productPerPage - productPerPage;
    const endIndex = startIndex + productPerPage;
    return products.slice(startIndex, endIndex);
  };
   const getPageNumberGroup = () => {
    let start = Math.floor((currPageNo - 1) / productPerPage) * productPerPage;
    console.log(new Array(3).fill(" ").map((_, index) => start + index + 1));
    return new Array(3).fill(" ").map((_, index) => start + index + 1);
  };
  


  return (
    <div >
      <select name="select" id="select" onChange={(evt)=>{console.log(evt.target.value); setValue(evt.target.value)}}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
      <button
          className={`page-change-btn ${currPageNo === 1 ? "disabled" : ""}  `}
          disabled={currPageNo === 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <ul className="page-num-container list-style-none">
          {pageNumberGroup.map((value, index) => {
            return (
              <li
                className={`page-number ${
                  currPageNo === value ? "active" : ""
                } `}
                key={index}
                onClick={() => changePageTo(value)}
              >
              <a href="!#">{value}</a>
              </li>
            );
          })}
        </ul>
        <button
          disabled={currPageNo === Math.floor(products.length / productPerPage)}
          className={`page-change-btn ${
            currPageNo === Math.floor(products.length / productPerPage)
              ? "disabled"
              : ""
          }  `}
          onClick={nextPage}
        >
          Next
        </button>
    </div>   
  )
}
