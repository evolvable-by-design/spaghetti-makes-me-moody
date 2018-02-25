import React from 'react';
import './HeaderTitle.css';

class HistoryView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { 'class': 'HeaderTitle' },
        'History'
      ),
      React.createElement(
        'ul',
        {'class': 'historyDataList'},
        React.createElement(
          'li', {'class': 'historyItem'},
          JSON.stringify(this.props.historyData)
        )
      )

    );
  }
}

export default HistoryView;

