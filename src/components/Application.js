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
      view: 'Journal',
      historyData: {}
    };

    this.handleViewChange = this.handleViewChange.bind(this);
    this.setHistoryData = this.setHistoryData.bind(this);
  }

  handleViewChange(viewString) {
    console.log(viewString);
    this.setState({ view: viewString });
  }

  setHistoryData(data) {
    this.state.historyData = data
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
          React.createElement(MainView, { state: this.state,
                                          changeView: this.handleViewChange,
                                          setHistorydata: this.setHistoryData })
        )
      )
    );
  }
}

function MainView(props) {
  const viewType = props.state.view;
  if (viewType === 'Journal') {
    return React.createElement(JournalView, {changeView: props.changeView,
                                             setHistoryData: props.setHistorydata});
  } else if (viewType === 'History') {
    return React.createElement(HistoryView, {historyData: props.state.historyData});
  } else if (viewType === 'Overall') {
    return React.createElement(OverallView, null);
  } else {
    return;
  }
}

export default Application;

