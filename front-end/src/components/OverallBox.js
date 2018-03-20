import React from 'react';
import ReactTooltip from 'react-tooltip';
import LineGraph from './LineGraph';
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
  render() {
    return (
      <div>
        <div class="HistoryEntryBox">
          <h3>Progress</h3>
          <div class="OverallBoxGraphLayout">
            <div class="GraphStyle">
              <LineGraph />
            </div>
            <div class="GraphStyle">
              <DoughnutGraph />
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
