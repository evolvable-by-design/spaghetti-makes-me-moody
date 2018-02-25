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
      // Eventually this will load the data for the current user
      historyData: []
    };

    this.handleViewChange = this.handleViewChange.bind(this);
    this.setHistoryData = this.setHistoryData.bind(this);
  }

  handleViewChange(viewString) {
    console.log(viewString);
    this.setState({ view: viewString });
  }

  setHistoryData(data) {
      let newHistoryData = this.state.historyData
      newHistoryData.push(data)
      this.setState({historyData: newHistoryData})
  }

  render() {
    return (
      <div>
        <div style={HeaderLayoutStyle}>
          <HeaderView
            onViewButtonClick={this.handleViewChange}
          />
          <div style={MainLayoutStyle}>
              <MainView state={this.state} changeView={this.handleViewChange}
                setHistoryData={this.setHistoryData}/>
          </div>
        </div>
    </div>
    );
  }
}

function MainView(props) {
  const viewType = props.state.view;
  if (viewType === 'Journal') {
    return <JournalView changeView={props.changeView}
                        setHistoryData={props.setHistoryData} />
  } else if (viewType === 'History') {
    return <HistoryView historyData={props.state.historyData} />
  } else if (viewType === 'Overall') {
    return <OverallView />
  } else {
    return
  }
}


export default Application;
