import React from 'react';
import { Line } from 'react-progress-bar.js';

const SentimentBarStyle = {
  overflow: 'hidden',
  height: '50px',
  display: 'flex',
  flexDirection: 'row'
};

const SentimentBarIconStyle = {
  overflow: 'hidden',
  position: 'relative',
  height: '50px',
  width: '50px'
};

const SentimentBarProgressStyle = {
  overflow: 'hidden',
  position: 'relative',
  margin: 'auto 0',
  flex: '1'
};

class SentimentBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    let barOptions = {
      color: self.props.sentimentScore < 0 ? '#B71B1B' : '#40E0D0',
      strokeWidth: 1.5,
      duration: 1500,
      trailColor: '#E5FBFF',
      trailWidth: 0.8,
      easing: 'bounce'
    };
    return (
      <div style={SentimentBarStyle}>
        <img src={require('./neutral.png')} style={SentimentBarIconStyle} />
        <div style={SentimentBarProgressStyle}>
          <Line
            progress={Math.max(
              Math.abs(self.props.sentimentScore) / 100.0,
              0.03
            )}
            className={'progressBar'}
            options={barOptions}
            initialAnimate={true}
          />
        </div>
        {(function() {
          if (self.props.sentimentScore < 0) {
            return (
              <img src={require('./mad.png')} style={SentimentBarIconStyle} />
            );
          } else {
            return (
              <img src={require('./happy.png')} style={SentimentBarIconStyle} />
            );
          }
        })()}
      </div>
    );
  }
}

export default SentimentBar;
