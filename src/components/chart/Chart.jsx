import React from 'react';
import { useEffect } from 'react';
import s from './chart.module.css';
import * as echarts from 'echarts';

export const Chart = ({ metrics }) => {
  const arrDays = metrics.time_intervals;
  const arrValues = metrics?.data[0].metrics;
	console.log(arrValues)
	console.log(arrDays);
  useEffect(() => {
    const option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: arrDays,
      },
      yAxis: {
        type: 'value',
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
