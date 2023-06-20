import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { getDiscountPrice } from './../../utils/function';

export const Basket = () => {
  const { basket, setBasket } = useContext(ProductsContext);
	const [count, setCount] = useState({count: 0});
  const getRemoveItemFromBasket = (id) => {
    const gds = basket.filter((el) => el.id !== id);
    if (basket.length > 1) {
      setBasket(gds);
      localStorage.setItem('basket', JSON.stringify(basket));
    } else {
      setBasket(gds);
      localStorage.removeItem('basket');
    }
  };
  //  const minus = () => {
  //    setCount((prev) => prev - 1);
  //  };

  //  const plus = () => {
  //    setCount((prev) => prev + 1);
  //  };

  return (
    <div className='container'>
      <h1>Корзина</h1>

      <div className='blockLeft'>
        {basket.map((item) => {
          let count = item.cnt;
          return (
            <div key={item.product._id}>
              <img src={item.product.pictures} alt='' />
              <p>{item.product.name}</p>
              <p>
                {getDiscountPrice(item.product.discount, item.product.price)}
                &nbsp;p
              </p>
              <div className='inCaseControls'>
                <button
                  className='inCaseMinus'
                  disabled={item.cnt <= 0 ? true : false}
                  onClick={(count) => count - 1}
                >
                  <span className='minusText'>-</span>
                </button>
                <span className='caseText'>{count}шт</span>
                <button
                  className='inCasePlus'
                  onClick={(count) => count + 1}
                  disabled={item.cnt === item.stock ? true : false}
                >
                  <span className='plusText'>+</span>
                </button>
              </div>
              <div className='del'>
                <button onClick={() => getRemoveItemFromBasket(item.id)}>
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className='blockRight'></div>
    </div>
  );
};
