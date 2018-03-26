import React from 'react';
import './SignUpView.css';
import './SubmitButton.css';
import './SignUpButton.css';
import './DynamicCheckMark.css';

// password / username validation setup
var passwordValidator = require('./PasswordValidator');
var passSchema = passwordValidator.passSchema;
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
  marginBottom: '30px',
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
                 };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
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

  render() {
    return (
        <div>
          <h1 class="HeaderTitle">Login</h1>
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
            </div>

          </div>
            <div style={buttonColumnStyle}>
              <button type="submit"
                      class="SubmitButton"
                      style={buttonLayoutStyle}
                      onClick={this.login}
                      disabled={!this.state.usernameOk || !this.state.passwordOk}>
                      log in
              </button>
              <button type="submit"
                      class="SignUpButton"
                      style={signUpButtonLayoutStyle}
                      onClick={() => {
                        this.props.changeLoginView('SignUp');
                      }}>
                      don&#39;t have an account?
                      <br/>
                      sign up
              </button>
            </div>
        </div>
    );
  }
}

export default LoginView;
