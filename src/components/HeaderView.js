import React from 'react';
import './HeaderTitle.css';
import './HeaderButton.css';

const HeaderTitleLayoutStyle = {
  'vertical-align': 'middle',
  'display': 'inline-block'
};

const HeaderLayoutStyle = {
  'text-align': 'center'
};

const ImageLayoutStyle = {
  'vertical-align': 'middle',
  'width': '80px',
  'height': 'auto'
};

const ButtonLayoutStyle = {
  'margin-top': '40px'
};

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
  }

  hello() {
    console.log("hello");
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: HeaderLayoutStyle },
        React.createElement('link', { async: true, href: 'http://fonts.googleapis.com/css?family=VT323', 'data-generated': 'http://enjoycss.com', rel: 'stylesheet', type: 'text/css' }),
        React.createElement('img', { src: require('./spaghetti-pixel.png'), style: ImageLayoutStyle }),
        React.createElement(
          'h1',
          { 'class': 'HeaderTitle', style: HeaderTitleLayoutStyle },
          'spaghetti makes me moody'
        ),
        React.createElement('img', { src: require('./spaghetti-pixel.png'), style: ImageLayoutStyle }),
        React.createElement(
          'div',
          { 'class': 'TabButtons', style: ButtonLayoutStyle },
          React.createElement(
            'button',
            { 'class': 'TabButton', onClick: () => {
                this.props.onViewButtonClick("Journal");
              } },
            'Journal'
          ),
          React.createElement(
            'button',
            { 'class': 'TabButton', onClick: () => {
                this.props.onViewButtonClick("History");
              } },
            'History'
          ),
          React.createElement(
            'button',
            { 'class': 'TabButton', onClick: () => {
                this.props.onViewButtonClick("Overall");
              } },
            'Overall'
          )
        )
      )
    );
  }
}

export default HeaderView;

