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
    console.log(viewString)
    this.setState(
      { view: viewString }
    )
  }

  render() {
    return (
      <div>
        <div style={HeaderLayoutStyle}>
          <HeaderView
            onViewButtonClick={this.handleViewChange}
          />
          <div style={MainLayoutStyle}>
              <MainView viewType={this.state.view} />
          </div>
        </div>
    </div>
    );
  }
}

function MainView(props) {
  const viewType = props.viewType;
  if (viewType === 'Journal') {
    return <JournalView />
  } else if (viewType === 'History') {
    return <HistoryView />
  } else if (viewType === 'Overall') {
    return <OverallView />
  } else {
    return
  }
}


export default Application;
