import React from 'react';
import HistoryEntry from './HistoryEntry';
import { sentimentFeedback, classificationFeedback } from './Analyzer';
import './HistoryEntryBox.css';
import './SaveAlertBox.css';

const historyDataList = {
  listStyleType: 'none',
  textAlign: 'center',
  display: 'inline-block',
  paddingLeft: '0.0em'
};

class HistoryView extends React.Component {
  render() {
    return (
      <div>
        <h1 class="HeaderTitle">History</h1>
        <div>
          <ol className="history-data-list" style={historyDataList}>
            <SaveAlertBox
              state={this.props.state}
            />
            {this.props.state.historyData.map(function(listValue) {
              return (
                <li>
                  <HistoryEntry
                    data={listValue}
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

function SaveAlertBox(props) {
  const loggedIn = props.state.loggedIn;
  if (!loggedIn) {
    return (
      <div class="SaveAlertBox">
        <p>to SAVE your entries sign up or login!</p>
      </div>
    );
  } else {
    return (null);
  }
}

export default HistoryView;
