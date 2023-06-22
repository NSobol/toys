import React from 'react';
import { useEffect } from 'react';
import s from './chart.module.css';
import * as echarts from 'echarts';

export const Chart = ({ metrics }) => {
	const arrDays = metrics.time_intervals;
  const arrValues = metrics?.data[0].metrics;
  useEffect(() => {
    const option = {
      title: {
        text: 'Количество посещений сайта',
        fontSize: 24,
        padding: [0, 0, 0, 200],
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: arrDays,
        name: 'Даты посещений',
        nameLocation: 'center',
        nameTextStyle: {
          padding: [10, 0, 0, 0],
          fontSize: 14,
        },
      },
      yAxis: {
        type: 'value',
        name: 'Количество посетителей',
        nameTextStyle: {
          padding: [0, 0, 0, 50],
          fontSize: 14,
        },
      },
      series: [
        {
          data: arrValues[0],
          type: 'line',
          areaStyle: {},
        },
      ],
    };
    const chartDom = document.getElementById('chartId');
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  }, [arrDays, arrValues]);

  return (
    <div>
      <div id='chartId' className={s.chart}></div>
    </div>
  );
};
