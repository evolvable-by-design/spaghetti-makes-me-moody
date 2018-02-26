import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = "'Press Start 2p', cursive";
defaults.global.defaultFontSize = 12;
const data = {
  labels: ['Angry', 'Sad', 'Mellow', 'Happy'],
  datasets: [
    {
      data: [30, 50, 100, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#009933', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#009933', '#FFCE56']
    }
  ]
};

class DoughnutGraph extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={data}
          height={150}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default DoughnutGraph;
