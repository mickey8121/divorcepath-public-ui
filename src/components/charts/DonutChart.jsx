import React, { useMemo } from 'react';

import 'chartjs-plugin-doughnutlabel';
import 'chartjs-plugin-deferred';
import 'chartjs-plugin-datalabels';

import { Doughnut } from 'react-chartjs-2';


const deferred = {
  xOffset: '50%', // defer until 50% of the canvas width are inside the viewport
  yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
  delay: 100 // delay of 500 ms after the canvas is considered inside the viewport
};

const DonutChart = ({ labels, data, text, subtext, instant }) => {
  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#8eb27a', '#4c91a1', '#ed7760', '#79bbc5', '#fadb83', '#805350'],
          hoverBackgroundColor: ['#203639', '#143042', '#332a34', '#1f3a49', '#363e3b', '#051c2d']
        }
      ]
    }),
    [labels, data]
  );

  const chartLabels = useMemo(
    () => {
      const chartLabelsData = [
        {
          text: '',
          font: {
            size: '10'
          },
          color: '#6c7686'
        },
        {
          text,
          font: {
            size: '50'
          },
          color: '#6c7686'
        }
      ];

      if (subtext) {
        return [
          ...chartLabelsData,
          {
            text: subtext,
            font: {
              size: '25'
            },
            color: '#6c7686'
          }
        ];
      }

      return chartLabelsData;
    },
    [subtext, text]
  );

  const chartOptions = useMemo(
    () => ({
      redraw: true,
      cutoutPercentage: 70,
      responsive: true,
      aspectRatio: 1,
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
        },
        doughnutlabel: {
          labels: chartLabels
        }
      }
    }),
    [instant, chartLabels]
  );

  return (
    <div className="p-1">
      <Doughnut data={chartData} options={chartOptions} width={200} height={200} />
    </div>
  );
};

export default DonutChart;
