import React from 'react';
import { ComeBack } from '../../components/comeBack/ComeBack';

export const AdminPage = () => {
  return (
    <div>
      <ComeBack />
      <h1>Страница администратора</h1>
      <div>
        <a href='https://metrika.yandex.ru/dashboard?id=94010807'>
          Отчет Яндекс Метрики
        </a>
      </div>
    </div>
  );
};
