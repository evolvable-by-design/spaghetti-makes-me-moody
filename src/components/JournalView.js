import React from 'react';
import axios from 'axios';
import './MainBodyText.css';
import './JournalBox.css';
import './SubmitButton.css';

const textBoxLayoutStyle = {
  'text-align': 'center'
};

const buttonLayoutStyle = {
  'margin-top': '20px'
};

class JournalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entryValue: 'Please elaborate!' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetEntryBox() {
    this.setState({ entryValue: 'Please elaborate!' });
  }

  handleChange(event) {
    this.setState({ entryValue: event.target.value });
  }

  handleSubmit(props) {
    var self = this;
    return event => {
      event.preventDefault();
      let postData = {
        document: {
          type: 'PLAIN_TEXT',
          content: self.state.entryValue
        }
      };

      axios
        .post(
          'https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyBAGVnmL3X96nCv0GLAxuFw4-czBVTrfyo',
          postData
        )
        .then(function(response) {
          let historyData = {
            date: new Date(),
            entry: self.state.entryValue,
            responseData: response.data
          };

          if (
            window.confirm(
              'Would you like to view the results of your entry analysis now?'
            )
          ) {
            // Set data and move to history view - currently just sending the
            // entire response until we keep track of entries
            props.setHistoryData(historyData);
            props.changeView('History');
          } else {
            // Add data but don't change view
            props.setHistoryData(historyData);
            // Reset entry box
            self.resetEntryBox();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  }

  render() {
    return (
      <div>
        <div style={textBoxLayoutStyle}>
          <b class="MainBodyText">how was your day? :)</b>
          <form onSubmit={this.handleSubmit(this.props)}>
            <label>
              <textarea
                class="JournalBox"
                type="text"
                name="journalEntry"
                value={this.state.entryValue}
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
      </div>
    );
  }
}

export default JournalView;
