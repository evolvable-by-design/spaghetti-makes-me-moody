import React from 'react';
import HistoryEntry from './HistoryEntry';
import { sentimentFeedback, classificationFeedback } from './Analyzer';
import './HistoryEntryBox.css';

const historyDataList = {
  listStyleType: 'none',
  textAlign: 'center',
  display: 'inline-block',
  paddingLeft: '0.0em'
};

class HistoryView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 class="HeaderTitle">History</h1>
        <div>
          <ol className="history-data-list" style={historyDataList}>
            {this.props.historyData.map(function(listValue) {
              let sentiment = sentimentFeedback(
                listValue.sentimentData.documentSentiment
              );
              let classification = classificationFeedback(
                listValue.classificationData
              );
              let feedbackObj = {
                sentFeedback: sentiment.feedback,
                sentScore: sentiment.score,
                classFeedback: classification
              };
              return (
                <li>
                  <HistoryEntry
                    date={listValue.date}
                    data={feedbackObj}
                    entry={listValue.entry}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default HistoryView;
