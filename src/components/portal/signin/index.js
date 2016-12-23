import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import './signin.css';


var SigninProgress = React.createClass({
  render() {
    return (
      <LinearProgress mode="indeterminate" className="portal-signin-progress" style={ { display: this.props.logining ? "block" : "none" } } />
      );
  }
})
var SignInForm = React.createClass({
  render() {
    var logining = this.props.logining;
    return (
      <div className="portal-signin-form">
        <div className="portal-logo">
          <span className="portal-logo-img" />
        </div>
        <div>
          <TextField hintText="Input guest as a guest" fullWidth={ true } floatingLabelText="Pls input user name..." />
          <TextField type="password" hintText="Input guest as a guest" fullWidth={ true } floatingLabelText="Pls input password..." />
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
      logining: false
    }
  },
  login() {
    this.setState({
      logining: true
    })
    var me = this;
    // assume ajax result is success, just redirect to home page.
    setTimeout(() => {
      me.props.router.push("/home");
    }, 3000)
  },
  render: function() {
    return (
      <div>
        <SigninProgress logining={ this.state.logining } />
        <SignInForm logining={ this.state.logining } login={ this.login } />
      </div>
      );
  }
});

module.exports = SignIn