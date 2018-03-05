import React from 'react';
import axios from 'axios';
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
        'https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyBAGVnmL3X96nCv0GLAxuFw4-czBVTrfyo',
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
      'https://language.googleapis.com/v1/documents:classifyText?key=AIzaSyBAGVnmL3X96nCv0GLAxuFw4-czBVTrfyo',
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
      placeholderText: 'Please elaborate!'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

          if (
            window.confirm(
              'Would you like to view the results of your entry analysis now?'
            )
          ) {
            // Set data and move to history view
            self.props.setHistoryData(historyData);
            self.props.changeView('History');
          } else {
            // Add data but don't change view
            self.props.setHistoryData(historyData);
            self.resetEntryBox();
          }
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
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
      </div>
    );
  }
}

export default JournalView;
