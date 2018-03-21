import React from 'react';
import { Line } from 'react-progress-bar.js';
import './SentimentBarStyle.css';

class SentimentBar extends React.Component {
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
      <div class="SentimentBarStyle">
        <img
          src={require('./neutral.png')}
          class="SentimentBarIconStyle"
          alt="placeholder"
        />
        <div class="SentimentBarProgressStyle">
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
              <img
                src={require('./mad.png')}
                class="SentimentBarIconStyle"
                alt="placeholder"
              />
            );
          } else {
            return (
              <img
                alt="placeholder"
                src={require('./happy.png')}
                class="SentimentBarIconStyle"
              />
            );
          }
        })()}
      </div>
    );
  }
}

export default SentimentBar;
