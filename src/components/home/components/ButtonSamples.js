import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  button: {
    margin: 12,
  },
  floating: {
    marginRight: 20,
  }
};
const FlatButtonExampleSimple = () => (
<div>
  <h3>Simple</h3>
  <FlatButton label="Default" />
  <FlatButton label="Primary" primary={ true } />
  <FlatButton label="Secondary" secondary={ true } />
  <FlatButton label="Disabled" disabled={ true } />
</div>
);
const FlatButtonExampleComplex = () => (
<div>
  <h3>Complex</h3>
  <FlatButton label="Choose an Image" labelPosition="before">
    <input type="file" style={ style.imageInput } />
  </FlatButton>
  <FlatButton label="Label before" labelPosition="before" primary={ true } style={ style.button } icon={ <ActionAndroid /> } />
  <FlatButton href="https://github.com/callemall/material-ui" target="_blank" label="GitHub Link" secondary={ true } icon={ <FontIcon className="muidocs-icon-custom-github" /> } />
</div>
);

const RaisedButtonExampleSimple = () => (
<div>
  <h3>Simple</h3>
  <RaisedButton label="Default" style={ style.button } />
  <RaisedButton label="Primary" primary={ true } style={ style.button } />
  <RaisedButton label="Secondary" secondary={ true } style={ style.button } />
  <RaisedButton label="Disabled" disabled={ true } style={ style.button } />
  <br />
  <br />
  <RaisedButton label="Full width" fullWidth={ true } />
</div>
);

const RaisedButtonExampleComplex = () => (
<div>
  <h3>Complex</h3>
  <RaisedButton label="Choose an Image" labelPosition="before" style={ style.button } containerElement="label">
    <input type="file" style={ style.imageInput } />
  </RaisedButton>
  <RaisedButton label="Label before" labelPosition="before" primary={ true } icon={ <ActionAndroid /> } style={ style.button } />
  <RaisedButton href="https://github.com/callemall/material-ui" target="_blank" label="Github Link" secondary={ true } style={ style.button } icon={ <FontIcon className="muidocs-icon-custom-github" /> }
  />
</div>
);

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = () => (
<div>
  <FloatingActionButton style={ style.floating }>
    <ContentAdd />
  </FloatingActionButton>
  <FloatingActionButton mini={ true } style={ style.floating }>
    <ContentAdd />
  </FloatingActionButton>
  <FloatingActionButton secondary={ true } style={ style.floating }>
    <ContentAdd />
  </FloatingActionButton>
  <FloatingActionButton mini={ true } secondary={ true } style={ style.floating }>
    <ContentAdd />
  </FloatingActionButton>
  <FloatingActionButton disabled={ true } style={ style.floating }>
    <ContentAdd />
  </FloatingActionButton>
  <FloatingActionButton mini={ true } disabled={ true } style={ style.floating }>
    <ContentAdd />
  </FloatingActionButton>
</div>
);

var Welcome = React.createClass({
  render() {
    return (
      <div>
        <h1>Flat Buttons</h1>
        <FlatButtonExampleSimple />
        <FlatButtonExampleComplex />
        <h1>Raised Buttons</h1>
        <RaisedButtonExampleSimple />
        <RaisedButtonExampleComplex />
        <h1>Floating Buttons</h1>
        <FloatingActionButtonExampleSimple />
      </div>
      );
  }
});

module.exports = Welcome
