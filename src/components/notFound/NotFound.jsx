import React from "react";
import { ReactComponent as SmileSad } from "./../../images/sad.svg";
import { ComeBack } from "../comeBack/ComeBack";
import s from "./Not.module.css";

export const NotFound = () => {
  return (
    <div className={s.notContainer}>
      <div className={s.notComeBack}>
        <ComeBack /> <br />
      </div>
      <div className={s.notMain}>
        <div>
          <SmileSad className={s.smailSad} />
        </div>
        <div className={s.notText}>
          <p>ПО ВАШЕМУ ЗАПРОСУ НИЧЕГО НЕ НАЙДЕНО...</p> <br />
          <p>NOT FOUND 404</p>
        </div>
      </div>
    </div>
  );
};
