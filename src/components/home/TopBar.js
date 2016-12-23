import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

export default React.createClass({

  getInitialState() {
    return {
      showCase: "Home"
    };
  },
  handleChange(event, index, value) {
    this.setState({
      value
    })
  },

  showComponents() {
    this.setState({
      showCase: "Components"
    })
    this.props.router.push("/home/components");
  },
  showRealWorld() {
    this.setState({
      showCase: "Real World"
    })
    this.props.router.push("/home/realworld");
  },
  showHome() {
    this.setState({
      showCase: "Home"
    })
    this.props.router.push("/home");
  },

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Show Case:" />
          <RaisedButton label="Components" onClick={ this.showComponents } primary={ true } />
          <RaisedButton label="Real World" onClick={ this.showRealWorld } primary={ true } />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={ `Show Case: ${this.state.showCase}` } />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label="Home" onClick={ this.showHome } primary={ true } />
          <RaisedButton label="Logout" />
        </ToolbarGroup>
      </Toolbar>
      );
  }
})