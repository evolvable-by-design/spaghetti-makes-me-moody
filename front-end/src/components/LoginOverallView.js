import React from 'react';
import SignUpView from './SignUpView.js';
import LoginView from './LoginView.js';

class LoginOverallView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginViewType: 'Login',
      alertMessage: ''
    };

    this.handleLoginViewChange = this.handleLoginViewChange.bind(this);
  }

  handleLoginViewChange(viewString, alertMessage) {
    this.setState({ loginViewType: viewString, alertMessage: alertMessage });
  }

  render() {
    return (
      <div>
        <MainView
          state={this.state}
          historyData={this.props.historyData}
          changeView={this.props.changeView}
          changeLoginView={this.handleLoginViewChange}
          handleSignUpSuccess={this.props.handleSignUpSuccess}
          handleLoginSuccess={this.props.handleLoginSuccess}
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
        alertMessage={props.state.alertMessage}
        changeView={props.changeView}
        changeLoginView={props.changeLoginView}
        handleLoginSuccess={props.handleLoginSuccess}
      />
    );
  } else if (viewType === 'SignUp') {
    return (
      <SignUpView
        historyData={props.historyData}
        changeLoginView={props.changeLoginView}
        handleSignUpSuccess={props.handleSignUpSuccess}
      />
    );
  } else {
    return;
  }
}

export default LoginOverallView;
