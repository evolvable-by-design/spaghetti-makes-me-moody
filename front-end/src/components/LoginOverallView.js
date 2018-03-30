import React from 'react';
import SignUpView from './SignUpView.js';
import LoginView from './LoginView.js'

class LoginOverallView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  loginViewType: 'Login'
                 };

    this.handleLoginViewChange = this.handleLoginViewChange.bind(this);
  }

  handleLoginViewChange(viewString) {
    console.log(viewString);
    this.setState({ loginViewType: viewString });
  }

  render() {
    return (
        <div>
          <MainView
            state={this.state}
            changeView={this.props.changeView}
            changeLoginView={this.handleLoginViewChange}
            handleLoginSuccess = {this.props.handleLoginSuccess}
          />
        </div>
    );
  }
}

function MainView(props) {
  const viewType = props.state.loginViewType;
  if (viewType === 'Login') {
    return (
      <LoginView
        changeView={props.changeView}
        changeLoginView={props.changeLoginView}
        handleLoginSuccess = {props.handleLoginSuccess}
      />
    );
  } else if (viewType === 'SignUp') {
    return (
      <SignUpView
        changeLoginView={props.changeLoginView}
        handleSignUpSuccess = {props.handleSignUpSuccess}
      />
    );
  } else {
    return;
  }
}

export default LoginOverallView;
