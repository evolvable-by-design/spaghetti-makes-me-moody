import React from 'react';
import './SignUpView.css';
import './SubmitButton.css';
import './DynamicCheckMark.css';

import { createUser } from './SpaghettiService'

// password / username validation setup
var passwordValidator = require('./PasswordValidator');
var passSchema = passwordValidator.passSchema;
var userSchema = passwordValidator.userSchema;

const buttonLayoutStyle = {
  marginRight: '20px',
  marginLeft: '20px',
  marginBottom: '30px'
};

class SignUpView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  usernameField: '',
                  usernameOk: false,
                  passwordField: '',
                  passwordOk: false,
                  passwordRField: '',
                  passwordROk: false,
                  showAlert: false,
                  alertMessage: ''
                 };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordRChange = this.handlePasswordRChange.bind(this);
    this.userSignUp = this.userSignUp.bind(this);
  }

  userSignUp() {
    var object = this
    createUser(this.state.usernameField, this.state.passwordField, function(responseCode) {
      if (responseCode === 201) {
        object.props.changeLoginView('Login');
      } else if (responseCode === 400)  {
        object.setState({alertMessage: 'Username already exists! Please choose a different one'});
        object.setState({showAlert: true});
      } else {
        object.setState({alertMessage: 'Error in signing up, please try again!'});
        object.setState({showAlert: true});
      }
    })
  }

  handleUsernameChange(event) {
    var object = this
    var promise = new Promise(function(resolve, reject) {
      object.setState({usernameField: event.target.value});
      resolve();
    });

    promise.then(function(result) {
      if (userSchema.validate(object.state.usernameField)) {
        object.setState({usernameOk: true});
      } else {
        object.setState({usernameOk: false});
      }
    }, function(err) {
     console.log(err);
    });
  }

  handlePasswordChange(event) {
    var object = this
    var promise = new Promise(function(resolve, reject) {
      object.setState({passwordField: event.target.value});
      resolve();
    });

    promise.then(function(result) {
      if (passSchema.validate(object.state.passwordField)) {
        object.setState({passwordOk: true});
      } else {
        object.setState({passwordOk: false});
      }
    }, function(err) {
     console.log(err);
    });
  }

  handlePasswordRChange(event) {
    var object = this
    var promise = new Promise(function(resolve, reject) {
      object.setState({passwordRField: event.target.value});
      resolve();
    });

    promise.then(function(result) {
      if ((passSchema.validate(object.state.passwordRField)) && (object.state.passwordField===object.state.passwordRField)) {
        object.setState({passwordROk: true});
      } else {
        object.setState({passwordROk: false});
      }
    }, function(err) {
     console.log(err);
    });
  }

  render() {
    return (
        <div>
          <h1 class="HeaderTitle">Sign Up</h1>
          <hr class="SignUpBorderLineStyle" />
          <div class='SignUpFieldsVerticalLayoutStyle'>
            <label for="username" class='SignUpBodyText'><b>username</b></label>
            <div class='SignUpFieldsHoriztonalLayoutStyle'>
              <input class='SignUpBodyTextInput'
                     type="text"
                     placeholder="enter username"
                     name="username"
                     value={this.state.usernameField}
                     onChange={this.handleUsernameChange}
              required />
            <div class='SignUpFieldsCheckMarkLayoutStyle'>
                <div class="colorful-switch">
                <input type="checkbox" class="colorful-switch__checkbox" id="colorful-switch-cb1"
                       checked={this.state.usernameOk}/>
                <label class="colorful-switch__label" for="colorful-switch-cb1">
                  <span class="colorful-switch__bg"></span>
                  <span class="colorful-switch__dot"></span>
                  <span class="colorful-switch__on">
                    <span class="colorful-switch__on__inner"></span>
                  </span>
                  <span class="colorful-switch__off"></span>
                </label>
                </div>
              </div>
            </div>

            <label for="psw" class='SignUpBodyText'><b>password</b></label>
            <div class='SignUpFieldsHoriztonalLayoutStyle'>
              <input class='SignUpBodyTextInput'
                     type="password"
                     placeholder="enter password"
                     name="psw"
                     value={this.state.passwordField}
                     onChange={this.handlePasswordChange}
              required />
              <div class='SignUpFieldsCheckMarkLayoutStyle'>
                <div class="colorful-switch">
                <input type="checkbox" class="colorful-switch__checkbox" id="colorful-switch-cb2"
                       checked={this.state.passwordOk}/>
                <label class="colorful-switch__label" for="colorful-switch-cb2">
                  <span class="colorful-switch__bg"></span>
                  <span class="colorful-switch__dot"></span>
                  <span class="colorful-switch__on">
                    <span class="colorful-switch__on__inner"></span>
                  </span>
                  <span class="colorful-switch__off"></span>
                </label>
                </div>
              </div>
            </div>

            <label for="psw-repeat" class='SignUpBodyText'><b>repeat password</b></label>
            <div class='SignUpFieldsHoriztonalLayoutStyle'>
              <input class='SignUpBodyTextInput'
                     type="password"
                     placeholder="repeat password"
                     name="psw-repeat"
                     value={this.state.passwordRField}
                     onChange={this.handlePasswordRChange}
              required />
              <div class='SignUpFieldsCheckMarkLayoutStyle'>
                <div class="colorful-switch">
                <input type="checkbox" class="colorful-switch__checkbox" id="colorful-switch-cb3"
                       checked={this.state.passwordROk}/>
                <label class="colorful-switch__label" for="colorful-switch-cb3">
                  <span class="colorful-switch__bg"></span>
                  <span class="colorful-switch__dot"></span>
                  <span class="colorful-switch__on">
                    <span class="colorful-switch__on__inner"></span>
                  </span>
                  <span class="colorful-switch__off"></span>
                </label>
                </div>
              </div>
            </div>
          </div>
          <AlertBox
            state={this.state}
          />
          <div>
            <button type="submit"
                    class="SubmitButton"
                    style={buttonLayoutStyle}
                    onClick={() => {
                      this.props.changeLoginView('Login');
                    }}>
                    cancel
            </button>
            <button type="submit"
                    class="SubmitButton"
                    style={buttonLayoutStyle}
                    onClick={this.userSignUp}
                    disabled={!this.state.usernameOk || !this.state.passwordOk|| !this.state.passwordROk}>
                    submit
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
    return (null);
  }
}

export default SignUpView;
