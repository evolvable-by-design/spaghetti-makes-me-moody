import React from 'react';
import HeaderView from './HeaderView';
import JournalView from './JournalView';
import HistoryView from './HistoryView';
import OverallView from './OverallView';
import LoginOverallView from './LoginOverallView';

const HeaderLayoutStyle = {
  top: '05%',
  textAlign: 'center'
};

class Application extends React.Component {
  constructor(props) {
    super(props);
    document.body.style = 'background-color: #5F9EA0;';

    this.state = {
      loggedIn: false,
      username: '',
      password: '',
      view: 'Journal',
      // Eventually this will load the data for the current user
      historyData: []
    };

    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.setHistoryData = this.setHistoryData.bind(this);
    this.removeHistoryAtIndex = this.removeHistoryAtIndex.bind(this);
  }

  handleViewChange(viewString) {
    this.setState({ view: viewString });
  }

  handleLoginSuccess(setUsername, setPassword, setHistoryData) {
    this.setState({ username: setUsername });
    this.setState({ password: setPassword });
    this.setState({ historyData: setHistoryData });
    this.setState({ loggedIn: true });
  }

  setHistoryData(data) {
    let newHistoryData = this.state.historyData;
    newHistoryData.unshift(data);
    this.setState({ historyData: newHistoryData });
  }

  removeHistoryAtIndex(index) {
    this.state.historyData.splice(index, 1);
    // hack to force re-render
    this.setState({ historyData: this.state.historyData });
  }

  render() {
    return (
      <div>
        <meta name="viewport" content="initial-scale=1" />
        <div style={HeaderLayoutStyle}>
          <HeaderView
            state={this.state}
            onViewButtonClick={this.handleViewChange}
          />
          <div>
            <MainView
              state={this.state}
              changeView={this.handleViewChange}
              handleLoginSuccess={this.handleLoginSuccess}
              setHistoryData={this.setHistoryData}
              removeHistoryAtIndex={this.removeHistoryAtIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

function MainView(props) {
  const viewType = props.state.view;
  if (viewType === 'Journal') {
    return (
      <JournalView
        changeView={props.changeView}
        setHistoryData={props.setHistoryData}
      />
    );
  } else if (viewType === 'History') {
    return (
      <HistoryView
        state={props.state}
        removeHistoryAtIndex={props.removeHistoryAtIndex}
      />
    );
  } else if (viewType === 'Overall') {
    return <OverallView />;
  } else if (viewType === 'Login') {
    return (
      <LoginOverallView
        historyData={props.state.historyData}
        changeView={props.changeView}
        handleLoginSuccess={props.handleLoginSuccess}
      />
    );
  } else {
    return;
  }
}

export default Application;
