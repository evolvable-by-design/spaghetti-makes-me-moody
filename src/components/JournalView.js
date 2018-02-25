import React from 'react';
import './MainBodyText.css';
import './JournalBox.css';
import './SubmitButton.css';

const textBoxLayoutStyle = {
  'text-align': 'center'
};

const textBoxStyle = {
  width: '600px',
  height: '200px'
};

const buttonLayoutStyle = {
  'margin-top': '20px'
};

class JournalView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: textBoxLayoutStyle },
        React.createElement(
          'b',
          { 'class': 'MainBodyText' },
          'how was your day? :)'
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'label',
            null,
            React.createElement('textarea', { 'class': 'JournalBox', type: 'text', name: 'journalEntry' })
          ),
          React.createElement(
            'div',
            { style: buttonLayoutStyle },
            React.createElement(
              'button',
              { 'class': 'SubmitButton' },
              'Submit'
            )
          )
        )
      )
    );
  }
}

export default JournalView;

