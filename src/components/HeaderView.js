import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HeaderTitle.css';
import './HeaderButton.css';

const HeaderTitleLayoutStyle = {
  verticalAlign: 'middle',
  display: 'inline-block'
};

const HeaderLayoutStyle = {
  textAlign: 'center'
};

const ImageLayoutStyle = {
  verticalAlign: 'middle',
  width: '80px',
  height: 'auto'
};

const ButtonLayoutStyle = {
  marginTop: '40px'
};

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  closeMenu(dest) {
    setTimeout(() => {
      this.setState({ menuOpen: false });
      this.props.onViewButtonClick(dest);
    }, 200);
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
          <div className="nav-mobile">
            <Menu isOpen={this.state.menuOpen}>
              <button
                id="journal"
                className="menu-item"
                onClick={() => {
                  this.closeMenu('Journal');
                }}
              >
                journal
              </button>
              <button
                id="history"
                className="menu-item"
                onClick={() => {
                  this.closeMenu('History');
                }}
              >
                history
              </button>
              <button
                id="overall"
                className="menu-item"
                onClick={() => {
                  this.closeMenu('Overall');
                }}
              >
                overall
              </button>
            </Menu>
          </div>
          <img
            className="spaghetti-img"
            src={require('./spaghetti-pixel.png')}
            style={ImageLayoutStyle}
          />
          <h1 class="HeaderTitle" style={HeaderTitleLayoutStyle}>
            spaghetti makes me moody
          </h1>
          <img
            className="spaghetti-img"
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
