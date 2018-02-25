import React from 'react';
import './HeaderTitle.css';
import './HeaderButton.css';

const HeaderTitleLayoutStyle = {
  'vertical-align': 'middle',
  display: 'inline-block'
};

const HeaderLayoutStyle = {
  'text-align': 'center'
};

const ImageLayoutStyle = {
  'vertical-align': 'middle',
  width: '80px',
  height: 'auto'
};

const ButtonLayoutStyle = {
  'margin-top': '40px'
};

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={HeaderLayoutStyle}>
          <link
            async
            href="http://fonts.googleapis.com/css?family=VT323"
            data-generated="http://enjoycss.com"
            rel="stylesheet"
            type="text/css"
          />
          <img
            src={require('./spaghetti-pixel.png')}
            style={ImageLayoutStyle}
          />
          <h1 class="HeaderTitle" style={HeaderTitleLayoutStyle}>
            spaghetti makes me moody
          </h1>
          <img
            src={require('./spaghetti-pixel.png')}
            style={ImageLayoutStyle}
          />
          <div class="TabButtons" style={ButtonLayoutStyle}>
            <button
              class="TabButton"
              onClick={() => {
                this.props.onViewButtonClick('Journal');
              }}
            >
              Journal
            </button>
            <button
              class="TabButton"
              onClick={() => {
                this.props.onViewButtonClick('History');
              }}
            >
              History
            </button>
            <button
              class="TabButton"
              onClick={() => {
                this.props.onViewButtonClick('Overall');
              }}
            >
              Overall
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderView;
