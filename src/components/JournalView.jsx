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
    return (
      <div>
        <div style={textBoxLayoutStyle}>
        <b>how was you day? :)</b>
        <form>
          <label>
            <input type="text" name="journalEntry" style={textBoxStyle}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default JournalView;
