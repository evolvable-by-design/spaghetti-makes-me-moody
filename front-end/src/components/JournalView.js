import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Config from '../config.json';
import './EntryDialog.css';
import './MainBodyText.css';
import './JournalBox.css';
import './SubmitButton.css';

const textBoxLayoutStyle = {
  textAlign: 'center'
};

const buttonLayoutStyle = {
  marginTop: '20px'
};

function postAnalyzeSentiment(data) {
  return (
    axios
      .post(
        `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${Config.google.languageApiKey}`,
        data
      )
      /* This then + catch allows us to have errors even though using .all() later */
      .then(function(content) {
        return content;
      })
      .catch(function(error) {
        console.log(error);
      })
  );
}

function postClassifyText(data) {
  return axios
    .post(
      `https://language.googleapis.com/v1/documents:classifyText?key=${Config.google.languageApiKey}`,
      data
    )
    .then(function(content) {
      return content;
    })
    .catch(function(error) {
      console.log(error);
    });
}

class JournalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryValue: '',
      placeholderText: 'Please elaborate!',
      dialogOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.exitToHistory = this.exitToHistory.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog() {
    this.setState({ dialogOpen: true });
  }

  exitToHistory() {
    this.setState({ dialogOpen: false });
    this.props.changeView('History');
  }

  closeDialog() {
    this.setState({ dialogOpen: false });
  }

  resetEntryBox() {
    this.setState({
      entryValue: '',
      placeholderText: 'Please elaborate!'
    });
  }

  handleChange(event) {
    this.setState({ entryValue: event.target.value });
  }

  handleSubmit(event) {
    var self = this;
    event.preventDefault();
    let postData = {
      document: {
        type: 'PLAIN_TEXT',
        content: self.state.entryValue
      }
    };

    axios
      .all([postAnalyzeSentiment(postData), postClassifyText(postData)])
      .then(
        axios.spread(function(sentiment, classification) {
          let classData = classification ? classification.data : null;
          let sentData = sentiment ? sentiment.data : null;
          let historyData = {
            date: new Date(),
            entry: self.state.entryValue,
            sentimentData: sentData,
            classificationData: classData
          };

          self.props.setHistoryData(historyData);
          self.resetEntryBox();
          self.openDialog();
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    var self = this;
    return (
      <div>
        <div style={textBoxLayoutStyle}>
          <b class="MainBodyText">how was your day? :)</b>
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea
                class="JournalBox"
                type="text"
                name="journalEntry"
                value={this.state.entryValue}
                placeholder={this.state.placeholderText}
                onChange={this.handleChange}
              />
            </label>
            <div style={buttonLayoutStyle}>
              <button class="SubmitButton" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Modal
          id="modal_with_forms"
          isOpen={self.state.dialogOpen}
          onRequestClose={this.closeDialog}
          overlayClassName={'EntryDialogOverlay'}
          className={'EntryDialog'}
        >
          <h2 class={'EntryDialogHeader'}>Submitted!</h2>
          <div class={'EntryDialogContent'}>
            Would you like to view your results now?
          </div>
          <div class={'EntryDialogButtonContainer'}>
            <button class={'TabButton'} onClick={self.closeDialog}>
              No
            </button>
            <button class={'TabButton'} onClick={self.exitToHistory}>
              Yes
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default JournalView;
