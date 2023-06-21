import React, { useState } from 'react';
import { ComeBack } from '../../components/comeBack/ComeBack';
import { AdminHeaderIcons } from './../../components/headers/adminHeaderIcons/AdminHeaderIcons';
import { Chart } from '../../components/chart/Chart';
import s from './AdminPage.module.css';
import { apiAdmin } from '../../utils/admin';

export const AdminPage = () => {
  const [metrics, setMetrics] = useState({});

  const getMetrics = () => {
    apiAdmin.getAnalytics().then((data) => setMetrics(data));
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
            <p>Статистика посещений: &nbsp;</p>
            <button className={s.adminButton} onClick={() => getMetrics()}>
              Получить аналитику
            </button>
          </div>
          <div className={s.graph}>
            {!!Object.keys(metrics).length && <Chart metrics={metrics} />}
          </div>
        </div>
      </div>
    </div>
  );
};
