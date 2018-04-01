import React from 'react';
import Moment from 'react-moment';
import SentimentBar from './SentimentBar.js';
import './HistoryEntryBox.css';
import './HistoryEntryDate.css';
import './BorderLineStyle.css';

class HistoryEntry extends React.Component {
  render() {
    let self = this;
    let getContent = function() {
      if (self.props.data.classFeedback != null) {
        return (
          <div class="HistoryEntryBox">
            <p>{self.props.data.entry}</p>
            <hr class="BorderLineStyle" />
            <p>{self.props.data.sentimentData.feedback}</p>
            <p>{self.props.data.classFeedback}</p>
            <SentimentBar sentimentScore={self.props.data.sentimentData.feeling} />
          </div>
        );
      } else {
        return (
          <div class="HistoryEntryBox">
            <p>{self.props.data.entry}</p>
            <hr class="BorderLineStyle" />
            <p>{self.props.data.sentimentData.feedback}</p>
            <SentimentBar sentimentScore={self.props.data.sentimentData.feeling} />
          </div>
        );
      }
    };
    return (
      <div>
        <h3 class="HistoryEntryDate">
          <Moment format="YYYY/MM/DD HH:mm">{this.props.data.date}</Moment>
        </h3>
        {getContent()}
      </div>
    );
  }
}

export default HistoryEntry;
