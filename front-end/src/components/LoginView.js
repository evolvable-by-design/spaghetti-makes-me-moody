import React from 'react';
import './SignUpView.css';
import './SubmitButton.css';
import './SignUpButton.css';
import './DynamicCheckMark.css';

import { retrieveUser } from './SpaghettiService';

// password / username validation setup
var passwordValidator = require('./PasswordValidator');
var passSchema = passwordValidator.loginPassSchema;
var userSchema = passwordValidator.userSchema;

const buttonColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const signUpButtonLayoutStyle = {
  marginRight: '20px',
  marginLeft: '20px',
  marginBottom: '30px'
};

const buttonLayoutStyle = {
  marginRight: '20px',
  marginLeft: '20px',
  marginBottom: '30px'
};

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameField: '',
      usernameOk: false,
      passwordField: '',
      passwordOk: false,
      showAlert: false,
      alertMessage: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    var object = this;
    retrieveUser(this.state.usernameField, this.state.passwordField, function(
      response
    ) {
      if (response.status === 200) {
        object.props.handleLoginSuccess(
          object.state.usernameField,
          object.state.passwordField,
          response.data.data.entryList
        );
        object.props.changeView('Journal');
      } else if (response.status === 404) {
        object.setState({ alertMessage: 'Username does not exist!' });
        object.setState({ showAlert: true });
      } else if (response.status === 401) {
        object.setState({ alertMessage: 'Password Incorrect!' });
        object.setState({ showAlert: true });
      } else {
        object.setState({
          alertMessage: 'Error in logging in, please try again!'
        });
        object.setState({ showAlert: true });
      }
    });
  }

  handleUsernameChange(event) {
    var object = this;
    var promise = new Promise(function(resolve, reject) {
      object.setState({ usernameField: event.target.value });
      resolve();
    });

    promise.then(
      function(result) {
        if (userSchema.validate(object.state.usernameField)) {
          object.setState({ usernameOk: true });
        } else {
          object.setState({ usernameOk: false });
        }
      },
      function(err) {
        console.log(err);
      }
    );
  }

  handlePasswordChange(event) {
    var object = this;
    var promise = new Promise(function(resolve, reject) {
      object.setState({ passwordField: event.target.value });
      resolve();
    });

    promise.then(
      function(result) {
        if (passSchema.validate(object.state.passwordField)) {
          object.setState({ passwordOk: true });
        } else {
          object.setState({ passwordOk: false });
        }
      },
      function(err) {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div>
        <h1 class="HeaderTitle">Login</h1>
        <hr class="SignUpBorderLineStyle" />
        <div class="SignUpFieldsVerticalLayoutStyle">
          <label for="username" class="SignUpBodyText">
            <b>username</b>
          </label>
          <div class="SignUpFieldsHoriztonalLayoutStyle">
            <input
              class="SignUpBodyTextInput"
              type="text"
              placeholder="enter username"
              name="username"
              value={this.state.usernameField}
              onChange={this.handleUsernameChange}
              required
            />
            <div class="SignUpFieldsCheckMarkLayoutStyle">
              <div class="colorful-switch">
                <input
                  type="checkbox"
                  class="colorful-switch__checkbox"
                  id="colorful-switch-cb1"
                  checked={this.state.usernameOk}
                />
                <label class="colorful-switch__label" for="colorful-switch-cb1">
                  <span class="colorful-switch__bg" />
                  <span class="colorful-switch__dot" />
                  <span class="colorful-switch__on">
                    <span class="colorful-switch__on__inner" />
                  </span>
                  <span class="colorful-switch__off" />
                </label>
              </div>
            </div>
          </div>

          <label for="psw" class="SignUpBodyText">
            <b>password</b>
          </label>
          <div class="SignUpFieldsHoriztonalLayoutStyle">
            <input
              class="SignUpBodyTextInput"
              type="password"
              placeholder="enter password"
              name="psw"
              value={this.state.passwordField}
              onChange={this.handlePasswordChange}
              required
            />
            <div class="SignUpFieldsCheckMarkLayoutStyle">
              <div class="colorful-switch">
                <input
                  type="checkbox"
                  class="colorful-switch__checkbox"
                  id="colorful-switch-cb2"
                  checked={this.state.passwordOk}
                />
                <label class="colorful-switch__label" for="colorful-switch-cb1">
                  <span class="colorful-switch__bg" />
                  <span class="colorful-switch__dot" />
                  <span class="colorful-switch__on">
                    <span class="colorful-switch__on__inner" />
                  </span>
                  <span class="colorful-switch__off" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <AlertBox state={this.state} />
        <div style={buttonColumnStyle}>
          <button
            type="submit"
            class="SubmitButton"
            style={buttonLayoutStyle}
            onClick={this.login}
            disabled={!this.state.usernameOk || !this.state.passwordOk}
          >
            log in
          </button>
          <button
            type="submit"
            class="SignUpButton"
            style={signUpButtonLayoutStyle}
            onClick={() => {
              this.props.changeLoginView('SignUp');
            }}
          >
            don&#39;t have an account?
            <br />
            sign up
          </button>
        </div>
      </div>
    );
  }
}

function AlertBox(props) {
  const showAlert = props.state.showAlert;
  const alertMessage = props.state.alertMessage;
  if (showAlert) {
    return (
      <div class="SignUpAlertBox">
        <p class="SignUpAlertBoxText">{alertMessage}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default LoginView;
