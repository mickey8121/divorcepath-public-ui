import React, { useMemo } from 'react';

import 'chartjs-plugin-doughnutlabel';
import 'chartjs-plugin-deferred';
import 'chartjs-plugin-datalabels';

import { Pie } from 'react-chartjs-2';

const bgColors = [
  '#8eb27a',
  '#8eb27a',
  '#8eb27a',
  '#8eb27a',
  '#79bbc5',
  '#79bbc5',
  '#4c91a1',
  '#4c91a1',
  '#4c91a1'
];

const hoverBgColors = [
  '#363e3b',
  '#363e3b',
  '#363e3b',
  '#363e3b',
  '#1f3a49',
  '#1f3a49',
  '#1f3a49',
  '#1f3a49'
];

const deferred = {
  xOffset: '50%', // defer until 50% of the canvas width are inside the viewport
  yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
  delay: 100 // delay of 500 ms after the canvas is considered inside the viewport
};

const PieChart = ({ labels, data, instant }) => {
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
      redraw: true,
      responsive: true,
      aspectRatio: 1.1,
      maintainAspectRatio: true,
      animation: {
        animateRotate: true
      },
      legend: {
        display: false
      },
      plugins: {
        deferred: instant ? false : deferred,
        datalabels: {
          // hide datalabels for all datasets
          display: false
        }
      }
    }),
    [instant]
  );

  return (
    <div className="pt-2 pb-3">
      <Pie data={chartData} options={chartOptions} height={200} width={200} />
    </div>
  );
};

export default PieChart;
