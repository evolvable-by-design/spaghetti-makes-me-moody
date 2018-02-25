import React from 'react';
import './HeaderTitle.css';

class HistoryView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 class="HeaderTitle">History</h1>
        <div>
          <ul class="historyDataList">
            {this.props.historyData.map(function(listValue) {
              return <li>{JSON.stringify(listValue)}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default HistoryView;
