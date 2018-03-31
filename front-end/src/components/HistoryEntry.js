import React from 'react';
import Moment from 'react-moment';
import SentimentBar from './SentimentBar.js';
import './HistoryEntryBox.css';
import './HistoryEntryDate.css';
import './BorderLineStyle.css';

import { deleteEntry } from './SpaghettiService';

class HistoryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.deleteEntryOnClick = this.deleteEntryOnClick.bind(this);
  }

  deleteEntryOnClick() {
    let self = this;
    deleteEntry(
      self.props.state.username,
      self.props.state.password,
      self.props.entryIndex,
      function(responseCode) {
        if (responseCode === 200) {
          // Delete the entry from in memory list
          console.log(self.props);
          self.props.removeHistoryAtIndex(self.props.entryIndex);
          alert('Entry deleted successfully!');
        } else if (responseCode === 404) {
          alert("Couldn't find this user or index in the db");
        } else {
          alert(
            'Something went reallly wrong deleting the entry (server is down possibly)'
          );
        }
      }
    );
  }

  render() {
    let self = this;
    let getContent = function() {
      if (self.props.data.classFeedback != null) {
        return (
          <div class="HistoryEntryBox">
            <p>{self.props.entry}</p>
            <hr class="BorderLineStyle" />
            <p>{self.props.data.sentFeedback}</p>
            <p>{self.props.data.classFeedback}</p>
            <SentimentBar sentimentScore={self.props.data.sentScore} />
          </div>
        );
      } else {
        return (
          <div class="HistoryEntryBox">
            <p>{self.props.entry}</p>
            <hr class="BorderLineStyle" />
            <p>{self.props.data.sentFeedback}</p>
            <SentimentBar sentimentScore={self.props.data.sentScore} />
          </div>
        );
      }
    };
    return (
      <div>
        <div>
          <h3 class="HistoryEntryDate">
            <Moment format="YYYY/MM/DD HH:mm">{this.props.date}</Moment>
          </h3>
          <ShowDeleteButton state={this} />
        </div>
        <div>{getContent()}</div>
      </div>
    );
  }
}

function ShowDeleteButton(self) {
  const loggedIn = self.state.props.state.loggedIn;
  if (loggedIn) {
    return (
      <button onClick={self.state.deleteEntryOnClick}>Delete Entry</button>
    );
  } else {
    return null;
  }
}

export default HistoryEntry;
