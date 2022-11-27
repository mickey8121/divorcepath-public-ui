import React, { useMemo } from 'react';

import 'chartjs-plugin-doughnutlabel';
import 'chartjs-plugin-deferred';
import 'chartjs-plugin-datalabels';

import { Bar } from 'react-chartjs-2';

import formatUSD from 'utils/formatUSD';

const bgColors = ['#8eb27a', '#4c91a1', '#ed7760', '#79bbc5', '#fadb83', '#805350'];
const hoverBgColors = ['#203639', '#143042', '#332a34', '#1f3a49', '#363e3b', '#051c2d'];

const deferred = {
  xOffset: 150, // defer until 150px of the canvas width are inside the viewport
  yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
  delay: 100 // delay of 500 ms after the canvas is considered inside the viewport
};

const BarChart = ({ labels, data, instant }) => {
  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data,
          backgroundColor: bgColors,
          hoverBackgroundColor: hoverBgColors
        }
      ]
    }),
    [labels, data]
  );

  const chartOptions = useMemo(
    () => ({
      // Customize chart options
      redraw: true,
      responsive: true,
      aspectRatio: 2,
      maintainAspectRatio: true,
      beginAtZero: true,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false
            }
          }
        ]
      },
      plugins: {
        deferred: instant ? false : deferred,
        datalabels: {
          color: 'white',
          display: context => context.dataset.data[context.dataIndex] > 15,
          font: {
            size: 18
          },
          formatter: value => formatUSD(Math.round(value))
        }
      }
    }),
    [instant]
  );

  return (
    <div>
      <Bar data={chartData} options={chartOptions} height={514} width={1030} />
    </div>
  );
};

export default BarChart;
