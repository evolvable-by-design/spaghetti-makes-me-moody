import React from 'react';
import ReactTooltip from 'react-tooltip';
import LineGraph from './LineGraph';
import DoughnutGraph from './DoughnutGraph';
import './HeaderTitle.css';
import './HistoryEntryBox.css';

const OverallBoxLayoutStyle = {
  display: 'flex',
  flexDirection: 'row'
};

const LineGraphStyle = {
  width: '400px',
  marginTop: '10px',
  marginBottom: '10px'
};

const DoughnutGraphStyle = {
  width: '400px',
  marginTop: '10px',
  marginBottom: '10px'
};

const AwardIconContainerLayoutStyle = {
  height: '100px',
  width: '100px',
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

const BorderLineStyle = {
  border: 0,
  backgroundColor: '#fff',
  borderTop: '5px dashed #8c8c8c'
};

class OverallBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="HistoryEntryBox">
          <h3>Progress</h3>
          <div style={OverallBoxLayoutStyle}>
            <div style={LineGraphStyle}>
              <LineGraph />
            </div>
            <div style={DoughnutGraphStyle}>
              <DoughnutGraph />
            </div>
          </div>
          <hr style={BorderLineStyle} />
          <h3>Awards</h3>
          <div style={OverallBoxLayoutStyle}>
            <a data-tip="SO MUCH SPAGHETTI">
              <div style={AwardIconContainerLayoutStyle}>
                <img
                  src={require('./spaghetti-pixel.png')}
                  style={AwardIconLayoutStyle}
                />
              </div>
            </a>
            <ReactTooltip place="top" effect="solid" />
            <a data-tip="MORE SPAGHETTI">
              <div style={AwardIconContainerLayoutStyle}>
                <img
                  src={require('./spaghetti-pixel.png')}
                  style={AwardIconLayoutStyle}
                />
              </div>
            </a>
            <ReactTooltip place="top" effect="solid" />
          </div>
          <hr style={BorderLineStyle} />
        </div>
      </div>
    );
  }
}

export default OverallBox;
