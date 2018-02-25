import React from 'react';

const textBoxLayoutStyle = {
  'text-align': 'center'
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
          <ol class="historyDataList">
            {this.props.historyData.map(function(listValue) {
              return (
                <li>
                  <div>
                    <b class="MainBodyText">
                      Entry date: {JSON.stringify(listValue.date)}
                    </b>
                  </div>
                  <div>
                    <label>
                      <textarea
                        class="JournalBox"
                        type="text"
                        name="historicalEntryText"
                        value={listValue.entry}
                      />
                    </label>
                  </div>
                  <div>
                    <p class="MainBodyText">
                      Tags: {JSON.stringify(listValue.responseData)}
                    </p>
                  </div>
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
