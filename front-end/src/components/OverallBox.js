import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import DoughnutGraph from './DoughnutGraph';
import './HeaderTitle.css';
import './OverallBoxGraphLayout.css';
import './GraphStyle.css';
import './HistoryEntryBox.css';
import './BorderLineStyle.css';

const OverallBoxAwardLayoutStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: '100%'
};

const AwardIconContainerLayoutStyle = {
  width: '100px',
  height: '100px',
  overflow: 'hidden',
  position: 'relative',
  margin: '20px 20px 20px 20px'
};

const AwardIconLayoutStyle = {
  maxWidth: '100%',
  maxWeight: '100%',
  height: 'auto',
  width: 'auto',
  top: '25%',
  position: 'absolute'
};

class OverallBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphOptions: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Score'
              },
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ]
        }
      }
    };

    this.createGraphData = this.createGraphData.bind(this);
    this.createDoughnutGraphData = this.createDoughnutGraphData.bind(this);
  }

  createGraphData() {
    let self = this;
    let dates = [];
    let sentimentList = [];
    console.log(self);

    let graphLimit =
      self.props.historyData.length <= 7 ? self.props.historyData.length : 7;

    for (let index = 0; index < graphLimit; index++) {
      const element = self.props.historyData[index];
      dates.push(element.date.slice(2, 10));
      sentimentList.push(element.sentimentData.feeling);
    }

    console.log(dates);
    console.log(sentimentList);

    var data = {
      labels: dates,
      datasets: [
        {
          label: 'Sentiment over time',
          fill: false,
          backgroundColor: 'rgba(230, 0, 0, 0.5)',
          borderColor: 'rgba(230, 0, 0, 0.5)',
          pointBorderColor: 'rgba(230,0,0,1)',
          pointBackgroundColor: 'rgba(230,0,0,0.5)',
          pointHoverBackgroundColor: 'rgb(230, 0, 0, 0.5)',
          pointHoverBorderColor: 'rgba(230, 0, 0, 1)',
          data: sentimentList
        }
      ]
    };

    return data;
  }

  createDoughnutGraphData() {
    let self = this;
    let reallySad = 0;
    let ok = 0;
    let happy = 0;
    let ecstatic = 0;

    for (let index = 0; index < self.props.historyData.length; index++) {
      const element = self.props.historyData[index];
      const feeling = element.sentimentData.feeling;

      if (feeling <= -50) {
        reallySad += 1;
      } else if (feeling <= 0) {
        ok += 1;
      } else if (feeling <= 50) {
        happy += 1;
      } else {
        ecstatic += 1;
      }
    }

    var data = {
      labels: ['Real Sad', 'OK', 'Happy', 'Ecstatic'],
      datasets: [
        {
          label: 'Mood',
          data: [reallySad, ok, happy, ecstatic],
          backgroundColor: ['#000066', '#ffcc00', '#40bf40', '#ff0000'],
          hoverBackgroundColor: ['#000066', '#ffcc00', '#40bf40', '#ff0000']
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <div>
        <div class="HistoryEntryBox">
          <h3>Progress</h3>
          <div class="OverallBoxGraphLayout">
            <div class="GraphStyle">
              <Line
                data={this.createGraphData()}
                options={this.state.graphOptions}
              />
            </div>
            <div class="GraphStyle">
              <Doughnut data={this.createDoughnutGraphData} />
            </div>
          </div>
          <hr class="BorderLineStyle" />
          <h3>Awards</h3>
          <div style={OverallBoxAwardLayoutStyle}>
            <a data-tip="SO MUCH SPAGHETTI">
              <div style={AwardIconContainerLayoutStyle}>
                <img
                  alt="placeholder"
                  src={require('./spaghetti-pixel.png')}
                  style={AwardIconLayoutStyle}
                />
              </div>
            </a>
            <ReactTooltip place="top" effect="solid" />
            <a data-tip="MORE SPAGHETTI">
              <div style={AwardIconContainerLayoutStyle}>
                <img
                  alt="placeholder"
                  src={require('./spaghetti-pixel.png')}
                  style={AwardIconLayoutStyle}
                />
              </div>
            </a>
            <ReactTooltip place="top" effect="solid" />
            <a data-tip="MORE SPAGHETTI">
              <div style={AwardIconContainerLayoutStyle}>
                <img
                  alt="placeholder"
                  src={require('./spaghetti-pixel.png')}
                  style={AwardIconLayoutStyle}
                />
              </div>
            </a>
            <ReactTooltip place="top" effect="solid" />
          </div>
          <hr class="BorderLineStyle" />
        </div>
      </div>
    );
  }
}

export default OverallBox;
