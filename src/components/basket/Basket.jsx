/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import { getDiscountPrice } from "./../../utils/function";
import s from "./basket.module.css";
import Close from "./../../images/close.png";

export const Basket = () => {
  const { basket, setBasket } = useContext(ProductsContext);

  const getRemoveItemFromBasket = (id) => {
    const gds = basket.filter((el) => el.id !== id);
    if (basket.length > 1) {
      setBasket(gds);
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      setBasket(gds);
      localStorage.removeItem("basket");
    }
  };

  const minus = (id) => {
    setBasket((prev) => {
      const test = prev.filter((el) => el.id === id);
      if (test.length) {
        return prev.map((el) => {
          if (el.id === id) {
            el.cnt--;
          }
          return el;
        });
      }
    });
  };

  const plus = (id) => {
    setBasket((prev) => {
      const test = prev.filter((el) => el.id === id);
      if (test.length) {
        return prev.map((el) => {
          if (el.id === id) {
            el.cnt++;
          }
          return el;
        });
      }
    });
  };

  localStorage.setItem("basket", JSON.stringify(basket));

  return (
    <div className={s.containerBasket}>
      <h1 className={s.basketText}>Корзина</h1>
      <div className={s.containerSum}>
        <div className={s.blockLeft}>
          {basket.map((item) => {
            let newPrice = 0;
            let totalPrice = 0;
            return (
              <div className={s.blockKey} key={item.product._id}>
                <div className={s.imgBar}>
                  <img
                    className={s.blockPictures}
                    src={item.product.pictures}
                    alt="Картинка"
                  />
                </div>
                <div className={s.allBar}>
                  <div className={s.leftBar}>{item.product.name}</div>

                  <div className={s.rightBar}>
                    <p>Единицы измерения: {item.product.wight}</p>
                    <p>
                      {
                        (newPrice = getDiscountPrice(
                          item.product.discount,
                          item.product.price
                        ))
                      }
                      &nbsp;p
                    </p>
                    <div className={s.inCaseControls}>
                      <button
                        className={s.inCaseMinus}
                        disabled={item.cnt <= 0 ? true : false}
                        onClick={() => minus(item.id)}
                      >
                        <span className={s.minusText}>-</span>
                      </button>
                      <span className={s.caseText}>{item.cnt}</span>
                      <button
                        className={s.inCasePlus}
                        onClick={() => plus(item.id)}
                        disabled={item.cnt !== item.stock ? false : true}
                      >
                        <span className={s.plusText}>+</span>
                      </button>
                    </div>
                    <div className={s.total}>
                      {(item.totalPrice = item.cnt * newPrice)} &nbsp;p
                    </div>
                    <div>
                      <button
                        className={s.del}
                        onClick={() => getRemoveItemFromBasket(item.id)}
                      >
                        <img
                          src={Close}
                          alt="Удалить"
                          className={s.delPictures}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={s.blockRight}>
          <p className={s.inTotal}>
            Всего по заказу:&nbsp;
            {basket.reduce(function (sum, current) {
              return sum + current.totalPrice;
            }, 0)}
            &nbsp;p
          </p>
        </div>
      </div>
    </div>
  );
};
