import React from 'react';
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
  }

  render() {
    return (
      <div>
        <div style={textBoxLayoutStyle}>
        <b class="MainBodyText">how was your day? :)</b>
        <form>
          <label>
            <textarea class="JournalBox" type="text" name="journalEntry"/>
          </label>
          <div style={buttonLayoutStyle}>
            <button class="SubmitButton">Submit</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default JournalView;
