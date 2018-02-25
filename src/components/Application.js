import React from 'react';
import HeaderView from './HeaderView';
import JournalView from './JournalView';
import HistoryView from './HistoryView';
import OverallView from './OverallView';

const HeaderLayoutStyle = {
  top: '05%',
  'text-align': 'center'
};

const MainLayoutStyle = {
  'margin-top': '50px'
};

class Application extends React.Component {
  constructor(props) {
    super(props);
    document.body.style = 'background-color: #5F9EA0;';

    this.state = {
      view: 'Journal'
    };

    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(viewString) {
    console.log(viewString);
    this.setState({ view: viewString });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: HeaderLayoutStyle },
        React.createElement(HeaderView, {
          onViewButtonClick: this.handleViewChange
        }),
        React.createElement(
          'div',
          { style: MainLayoutStyle },
          React.createElement(MainView, { viewType: this.state.view })
        )
      )
    );
  }
}

function MainView(props) {
  const viewType = props.viewType;
  if (viewType === 'Journal') {
    return React.createElement(JournalView, null);
  } else if (viewType === 'History') {
    return React.createElement(HistoryView, null);
  } else if (viewType === 'Overall') {
    return React.createElement(OverallView, null);
  } else {
    return;
  }
}

export default Application;

