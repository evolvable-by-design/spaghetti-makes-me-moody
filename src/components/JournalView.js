import React from 'react';

const textBoxLayoutStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const textBoxStyle = {
  width: '600px',
  height: '200px'
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
          null,
          'how was you day? :)'
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'label',
            null,
            React.createElement('input', { type: 'text', name: 'journalEntry', style: textBoxStyle })
          ),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        )
      )
    );
  }
}

export default JournalView;

