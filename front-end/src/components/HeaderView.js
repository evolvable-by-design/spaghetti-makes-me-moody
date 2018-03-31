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

    this.closeMenu = this.closeMenu.bind(this);
    this.closeMenuLogout = this.closeMenuLogout.bind(this);
  }

  closeMenu(dest) {
    setTimeout(() => {
      this.setState({ menuOpen: false });
      this.props.onViewButtonClick(dest);
    }, 200);
  }

  closeMenuLogout(dest) {
    setTimeout(() => {
      this.setState({ menuOpen: false });
      this.props.handleLogout();
    }, 200);
  }

  thirdButtonTitle() {
    if (this.props.state.loggedIn) {
      return 'Overall'
    } else {
      return 'Login'
    }
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
                Journal
              </button>
              <button
                id="history"
                className="menu-item"
                onClick={() => {
                  this.closeMenu('History');
                }}
              >
                History
              </button>
              <button
                id={this.thirdButtonTitle()}
                className="menu-item"
                onClick={() => {
                  this.closeMenu(this.thirdButtonTitle());
                }}
              >
                {this.thirdButtonTitle()}
              </button>
              <LogoutMenuButton
                state={this.props.state}
                handleLogout={this.closeMenuLogout}
              />
            </Menu>
          </div>
          <img
            alt="placeholder"
            className="spaghetti-img"
            src={require('./spaghetti-pixel.png')}
            style={ImageLayoutStyle}
          />
          <h1 class="HeaderTitle" style={HeaderTitleLayoutStyle}>
            spaghetti makes me moody
          </h1>
          <img
            alt="placeholder"
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
                this.props.onViewButtonClick(this.thirdButtonTitle());
              }}
            >
              {this.thirdButtonTitle()}
            </button>
            <LogoutButton
              state={this.props.state}
              handleLogout={this.props.handleLogout}
            />
          </div>
        </div>
      </div>
    );
  }
}

class LogoutMenuButton extends React.Component {
  render() {
    if (this.props.state.loggedIn) {
      return (
        <button
          id="Logout"
          className="menu-item"
          onClick={() => {
            this.props.handleLogout();
          }}
        >
          Logout
        </button>
      );
    } else {
      return (null);
    }
  }
}

class LogoutButton extends React.Component {
  render() {
    if (this.props.state.loggedIn) {
      return (
        <button
          class="TabButton"
          onClick={() => {
            this.props.handleLogout();
          }}
        >
          Logout
        </button>
      );
    } else {
      return (null);
    }
  }
}

export default HeaderView;
