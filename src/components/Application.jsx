import React from 'react';
import JournalView from './JournalView';

class Application extends React.Component {
  constructor(props) {
    super(props);
    document.body.style = 'background-color: #5F9EA0;';
  }

  render() {
    return (
      <div>
        <JournalView />
      </div>
    );
  }
}

export default Application;
