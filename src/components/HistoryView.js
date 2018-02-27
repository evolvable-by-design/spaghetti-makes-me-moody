import React from 'react';
import HistoryEntry from './HistoryEntry';
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
              return (
                <li>
                  <HistoryEntry
                    date={listValue.date}
                    data={JSON.stringify(listValue.responseData)}
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
