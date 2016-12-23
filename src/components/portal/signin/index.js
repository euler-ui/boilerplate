import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';
import 'whatwg-fetch';
import './signin.css';

var SigninProgress = React.createClass({
  render() {
    return (
      <LinearProgress mode="indeterminate" className="portal-signin-progress" style={ { display: this.props.logining ? "block" : "none" } } />
      );
  }
})
var SignInForm = React.createClass({
  getValue() {
    return {
      userName: this.refs.userName.getValue(),
      userPassword: this.refs.userPassword.getValue()
    }
  },
  render() {
    var logining = this.props.logining;
    return (
      <div className="portal-signin-form">
        <div className="portal-logo">
          <span className="portal-logo-img" />
        </div>
        <div>
          <TextField ref="userName" hintText="Input guest as a guest" errorText={ this.props.openError ? "Username or password is wrong" : "" } fullWidth={ true } floatingLabelText="Pls input user name..."
          />
          <TextField ref="userPassword" type="password" hintText="Input guest as a guest" errorText={ this.props.openError ? "Username or password is wrong" : "" } fullWidth={ true } floatingLabelText="Pls input password..."
          />
        </div>
        <div className="portal-signin-bts">
          <RaisedButton label="Login" primary={ true } onClick={ this.props.login } style={ { margin: 12 } } disabled={ logining ? true : false } />
        </div>
      </div>
      );
  }
})
var SignIn = React.createClass({
  getInitialState() {
    return {
      logining: false,
      openError: false
    }
  },
  handleLoginResult(result) {
    if (result && result.status === "SUCCESS") {
      this.props.router.push("/home");
    } else {
      this.setState({
        logining: false,
        openError: true
      })
    }
  },
  login() {
    this.setState({
      logining: true,
      openError: false
    })
    setTimeout(() => {
      this.handleLoginResult({
        status: "SUCCESS"
      });
    }, 3000)
  },
  // login() {
  //   this.setState({
  //     logining: true,
  //     openError: false
  //   })
  //   fetch("/api/portal/users/login", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.refs.signin.getValue())
  //   }).then((response) => {
  //     return response.json();
  //   }).then(this.handleLoginResult).catch(this.handleLoginResult);
  // },
  render: function() {
    return (
      <div>
        <SigninProgress logining={ this.state.logining } />
        <SignInForm ref="signin" openError={ this.state.openError } logining={ this.state.logining } login={ this.login } />
        <Snackbar open={ this.state.openError } message="Your username or password is wrong!" autoHideDuration={ 2000 } />
      </div>
      );
  }
});

module.exports = SignIn
