import React, { useState } from "react";
import { ComeBack } from "../../components/comeBack/ComeBack";
import { AdminHeaderIcons } from "./../../components/headers/adminHeaderIcons/AdminHeaderIcons";
import { Chart } from "../../components/chart/Chart";
import s from "./AdminPage.module.css";

export const AdminPage = () => {
  const [metrics, setMetrics] = useState({});
  const getAnalytics = async () => {
    const result = await fetch(
      `https://api-metrika.yandex.net/stat/v1/data/bytime?metrics=ym:s:hits&date1=30daysAgo&date2=today&group=day&id=94010807`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res.ok
        ? res.json()
        : res.json().then((data) => Promise.reject(data));
    });
    setMetrics(result);
  };

  return (
    <div>
      <div className={s.adminContainer}>
        <div className={s.adminComeBack}>
        <ComeBack />
        </div>
        <h1 className={s.adminText}>Страница администратора</h1>
        <div className={s.contentAdminPage}>
          <div className={s.adminOne}>
            <p>Добавление товара: &nbsp;</p>
            <AdminHeaderIcons />
          </div>
          <div className={s.adminTwo}>
            {/* <a href='https://metrika.yandex.ru/dashboard?id=94010807'>
            Отчет Яндекс Метрики
          </a> */}
            <p>Статистика посещений: &nbsp;</p>
            <button className={s.adminButton} onClick={() => getAnalytics()}>Получить аналитику</button>
          </div>
          <div className={s.graph}>
            {!!Object.keys(metrics).length && <Chart metrics={metrics} />}
          </div>
        </div>
      </div>
    </div>
  );
};
