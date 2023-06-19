import React, { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { getDiscountPrice } from './../../utils/function';

export const Basket = () => {
  const { basket, setBasket } = useContext(ProductsContext);

  const getRemoveItemFromBasket = (product) => {
	//   e.stopPropagation();
	  const t = product._id;
	  console.log(t)
	  console.log('Удаление')
    // setBasket((prev) => {
    //   const test = prev.filter((el) => el.id === product._id);
    // });
  };

  return (
    <div className='container'>
      <h1>Корзина</h1>

      <div className='blockLeft'>
        {basket.map((item) => (
          <div key={item.product._id}>
            <img src={item.product.pictures} alt='' />
            <p>{item.product.name}</p>
            <p>{item.product.cnt}шт</p>
            <p>
              {getDiscountPrice(item.product.discount, item.product.price)}
              &nbsp;p
            </p>
            <div className='inCaseControls'>
              {/* <button className='inCaseMinus' onClick={console.log('-')}>
                <span className='minusText'>-</span>
              </button> */}
              <span className='caseText'>{'0'}</span>
              {/* <button className='inCasePlus' onClick={console.log('+')}>
                <span className='plusText'>+</span>
              </button> */}
            </div>
            {/* <div className='del'>
              <button onClick={() => getRemoveItemFromBasket(product)}>Удалить</button>
            </div> */}
          </div>
        ))}
      </div>
      <div className='blockRight'></div>
    </div>
  );
};
