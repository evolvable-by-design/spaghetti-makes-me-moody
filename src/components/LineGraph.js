import React from 'react';
import 'chartjs-plugin-deferred';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  datasets: [
    {
      label: 'Happiness',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgb(153, 153, 0)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(255, 153, 0)',
      pointBackgroundColor: 'rgb(255, 153, 0)',
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(255, 153, 0)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 3,
      pointHitRadius: 0,
      data: [0.1, -0.5, 1.0, 0.8, 0.5, -1.0, -0.1, 0.2, 0.6, 0.8, 0.6]
    }
  ]
};

class LineGraph extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={data}
          height={150}
          options={{
            plugins: {
              deferred: {
                delay: 500 //500ms
              }
            },
            tooltips: {
              callbacks: {
                title: function(tooltipItem, data) {
                  return;
                },
                label: function(tooltipItem, data) {
                  return data['datasets'][0]['data'][tooltipItem['index']];
                },
                afterLabel: function(tooltipItem, data) {
                  return;
                }
              }
            },
            layout: {
              padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
              }
            },
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 1.0,
                    min: -1.0,
                    stepSize: 0.5
                  }
                }
              ],
              xAxes: [
                {
                  display: false
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default LineGraph;
