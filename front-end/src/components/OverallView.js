import React from 'react';
import './HeaderTitle.css';
import OverallBox from './OverallBox';

class OverallView extends React.Component {
  render() {
    return (
      <div>
        <h1 class="HeaderTitle">Overall</h1>
        <OverallBox historyData={this.props.historyData} />
      </div>
    );
  }
}

export default OverallView;
