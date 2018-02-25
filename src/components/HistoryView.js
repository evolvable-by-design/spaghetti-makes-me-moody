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
      React.createElement("ul", 'historyDataList',
      this.props.historyData.map(function(listValue){
        return React.createElement("li", null, JSON.stringify(listValue));
      })
    )
)   
  }
}

export default HistoryView;

