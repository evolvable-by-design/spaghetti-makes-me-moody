import React from 'react';
import './HeaderTitle.css';

class OverallView extends React.Component {
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
        'Overall'
      )
    );
  }
}

export default OverallView;

