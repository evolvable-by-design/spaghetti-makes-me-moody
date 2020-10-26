import React from 'react';
import Modal from 'react-modal';
import './EntryDialog.css';
import './MainBodyText.css';
import './JournalBox.css';
import './SubmitButton.css';
import withSpaghettiService from './WithSpaghettiService';
import vocabulary from '../vocabulary';

const textBoxLayoutStyle = {
  textAlign: 'center'
};

const buttonLayoutStyle = {
  marginTop: '20px'
};

class JournalView extends React.Component {

  semanticMappings = {
    [vocabulary.terms.userName]: 'username',
    [vocabulary.terms.password]: 'password',
    [vocabulary.terms.textToAnalyze]: 'entryValue',
  }

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
    this.props.spaghettiService.analyzeText(
      {...self.props, ...self.state},
      this.semanticMappings,
      function(response) {
        var status = response.status;
        if (status != 200) {
          console.log(status)
          console.log("Something went wrong... TODO Error messaging for user");
          return;
        }
        self.props.setHistoryData(response.data.data);
        self.resetEntryBox();
        self.openDialog();
      }
    )
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

export default withSpaghettiService(JournalView);
