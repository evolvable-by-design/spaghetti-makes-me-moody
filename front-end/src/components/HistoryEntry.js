import React from 'react';
import Moment from 'react-moment';
import Modal from 'react-modal';
import SentimentBar from './SentimentBar.js';
import './HistoryEntryBox.css';
import './HistoryEntryDate.css';
import './BorderLineStyle.css';

import { deleteEntry } from './SpaghettiService';

class HistoryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
    this.deleteEntryOnClick = this.deleteEntryOnClick.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog() {
    this.setState({ dialogOpen: true });
  }

  closeDialog() {
    this.setState({ dialogOpen: false });
  }

  deleteEntryOnClick() {
    let self = this;
    deleteEntry(
      self.props.state.username,
      self.props.state.password,
      self.props.entryIndex,
      function(response) {

        if (typeof response === 'undefined') {
          alert(
            'Something went reallly wrong deleting the entry (server is down possibly)'
          );
          return;
        }

        if (response.status === 200) {
          // Delete the entry from in memory list
          console.log(self.props);
          self.props.removeHistoryAtIndex(self.props.entryIndex);
        } else if (response.status === 404) {
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
            <p>{self.props.data.entry}</p>
            <hr class="BorderLineStyle" />
            <p>{self.props.data.sentimentData.feedback}</p>
            <p>{self.props.data.classFeedback}</p>
            <SentimentBar
              sentimentScore={self.props.data.sentimentData.feeling}
            />
          </div>
        );
      } else {
        return (
          <div class="HistoryEntryBox">
            <p>{self.props.data.entry}</p>
            <hr class="BorderLineStyle" />
            <p>{self.props.data.sentimentData.feedback}</p>
            <SentimentBar
              sentimentScore={self.props.data.sentimentData.feeling}
            />
          </div>
        );
      }
    };
    return (
      <div>
        <div>
          <h3 class="HistoryEntryDate">
            <Moment format="YYYY/MM/DD HH:mm">{this.props.data.date}</Moment>
          </h3>
          <ShowDeleteButton state={this} />
        </div>
        <div>{getContent()}</div>
        <Modal
          id="modal_with_forms"
          isOpen={self.state.dialogOpen}
          onRequestClose={this.closeDialog}
          overlayClassName={'EntryDialogOverlay'}
          className={'EntryDialog'}
        >
          <h2 class={'EntryDialogHeader'}>Delete entry</h2>
          <div class={'EntryDialogContent'}>
            Are you sure you want to delete this entry?
          </div>
          <div class={'EntryDialogButtonContainer'}>
            <button class={'TabButton'} onClick={self.closeDialog}>
              No
            </button>
            <button class={'TabButton'} onClick={self.deleteEntryOnClick}>
              Yes
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

function ShowDeleteButton(self) {
  const loggedIn = self.state.props.state.loggedIn;
  if (loggedIn) {
    return (
      <img
        alt="Delete this entry"
        className="trashCan-img"
        src={require('./trashCan.png')}
        onClick={self.state.openDialog}
      />
    );
  } else {
    return null;
  }
}

export default HistoryEntry;
