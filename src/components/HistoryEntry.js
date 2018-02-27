import React from 'react';
import Moment from 'react-moment';
import './HistoryEntryBox.css';
import './HistoryEntryDate.css';
import './BorderLineStyle.css';

class HistoryEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 class="HistoryEntryDate">
          <Moment format="YYYY/MM/DD HH:mm">{this.props.date}</Moment>
        </h3>
        <div class="HistoryEntryBox">
          <p>{this.props.entry}</p>
          <hr class="BorderLineStyle" />
          <p>{this.props.data}</p>
        </div>
      </div>
    );
  }
}

export default HistoryEntry;
