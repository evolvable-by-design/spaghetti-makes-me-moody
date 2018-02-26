import React from 'react';
import Moment from 'react-moment';
import './HistoryEntryBox.css';
import './HistoryEntryDate.css';

const BorderLineStyle = {
  border: 0,
  backgroundColor: '#fff',
  borderTop: '5px dashed #8c8c8c'
};

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
          <hr style={BorderLineStyle} />
          <p>{this.props.data}</p>
        </div>
      </div>
    );
  }
}

function formatDate(date) {
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  var minute = date.getMinutes();
  var hour = date.getHours();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (
    hour + ':' + minute + ' ' + monthNames[monthIndex] + ' ' + day + ', ' + year
  );
}

export default HistoryEntry;
