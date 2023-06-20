import React from 'react';
import { ComeBack } from '../../components/comeBack/ComeBack';
import { AdminHeaderIcons } from './../../components/headers/adminHeaderIcons/AdminHeaderIcons';

export const AdminPage = () => {
  const getAnalytics = async () => {
    const result = await fetch(
      `https://api-metrika.yandex.net/stat/v1/data/bytime?metrics=ym:s:hits&date1=30daysAgo&date2=today&group=day&id=94010807`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
	).then((res) => {
		

		
		return res.ok
      ? res.json()
      : res.json().then((data) => Promise.reject(data));

	});
	  console.log(result.data[0].metrics)
	  return result;
  };

  return (
    <div>
      <ComeBack />
      <h1>Страница администратора</h1>
      <div>
        <a href='https://metrika.yandex.ru/dashboard?id=94010807'>
          Отчет Яндекс Метрики
        </a>
        <button onClick={()=>getAnalytics()}>Получить аналитику</button>
      </div>
      {/* <div>{()=>getAnalytics()}</div> */}
      <div>
        <AdminHeaderIcons />
      </div>
    </div>
  );
};
