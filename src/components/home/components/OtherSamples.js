import React from 'react';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Step, Stepper, StepLabel, } from 'material-ui/Stepper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
const DialogExampleSimple = React.createClass({
  getInitialState() {
    return {
      open: false,
    };
  },

  handleOpen() {
    this.setState({
      open: true
    });
  },

  handleClose() {
    this.setState({
      open: false
    });
  },

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={ true } onTouchTap={ this.handleClose } />,
      <FlatButton label="Submit" primary={ true } keyboardFocused={ true } onTouchTap={ this.handleClose } />,
    ];

    return (
      <div>
        <h1>Dialog Simple</h1>
        <RaisedButton label="Dialog" onTouchTap={ this.handleOpen } />
        <Dialog title="Dialog With Actions" actions={ actions } modal={ false } open={ this.state.open } onRequestClose={ this.handleClose }>
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
      );
  }
})

const DrawerSimpleExample = React.createClass({

  getInitialState() {
    return {
      open: false,
    };
  },
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  },

  render() {
    return (
      <div>
        <h1></h1>
        <RaisedButton label="Toggle a Drawer" onTouchTap={ this.handleToggle } />
        <Drawer open={ this.state.open }>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
      );
  }
})

const DrawerOpenRightExample = React.createClass({

  getInitialState() {
    return {
      open: false,
    };
  },
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  },

  render() {
    return (
      <div>
        <h1></h1>
        <RaisedButton label="Toggle a Secondary Drawer" onTouchTap={ this.handleToggle } />
        <Drawer width={ 200 } openSecondary={ true } open={ this.state.open }>
          <AppBar title="AppBar" />
        </Drawer>
      </div>
      );
  }
})

const CircularProgressExampleSimple = () => (
<div>
  <h1>Circular Progress</h1>
  <CircularProgress />
  <CircularProgress size={ 60 } thickness={ 7 } />
  <CircularProgress size={ 80 } thickness={ 5 } />
</div>
);

const LinearProgressExampleSimple = () => (
<div>
  <h1>Linear Progress</h1>
  <LinearProgress mode="indeterminate" />
</div>
);
const RefreshIndicatorExampleSimple = () => (
<div style={ style.container }>
  <h1>Refresh Indicator</h1>
  <RefreshIndicator percentage={ 30 } size={ 40 } left={ 10 } top={ 0 } status="ready" style={ style.refresh }
  />
  <RefreshIndicator percentage={ 60 } size={ 50 } left={ 65 } top={ 0 } status="ready" style={ style.refresh }
  />
  <RefreshIndicator percentage={ 80 } size={ 60 } left={ 120 } top={ 0 } color="red" status="ready" style={ style.refresh }
  />
  <RefreshIndicator percentage={ 100 } size={ 70 } left={ 175 } top={ 0 } color="red" // Overridden by percentage={100}
    status="ready" style={ style.refresh } />
</div>
);
const RefreshIndicatorExampleLoading = () => (
<div style={ style.container }>
  <RefreshIndicator size={ 40 } left={ 10 } top={ 0 } status="loading" style={ style.refresh } />
  <RefreshIndicator size={ 50 } left={ 70 } top={ 0 } loadingColor="#FF9800" status="loading" style={ style.refresh }
  />
</div>
);
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
const HorizontalLinearStepper = React.createClass({

  getInitialState() {
    return {
      finished: false,
      stepIndex: 0,
    }
  },

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  },

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  },

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default: return 'You\'re a long way from home sonny jim!';
    }
  },

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {
      margin: '0 16px'
    };

    return (
      <div style={ { width: '100%', maxWidth: 700, margin: 'auto' } }>
        <Stepper activeStep={ stepIndex }>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>
        <div style={ contentStyle }>
          { finished ? (
            <p>
              <a href="#" onClick={ (event) => {
                                      event.preventDefault();
                                      this.setState({
                                        stepIndex: 0,
                                        finished: false
                                      });
                                    } }>Click here</a> to reset the example.
            </p>
            ) : (
            <div>
              <p>
                { this.getStepContent(stepIndex) }
              </p>
              <div style={ { marginTop: 12 } }>
                <FlatButton label="Back" disabled={ stepIndex === 0 } onTouchTap={ this.handlePrev } style={ { marginRight: 12 } } />
                <RaisedButton label={ stepIndex === 2 ? 'Finish' : 'Next' } primary={ true } onTouchTap={ this.handleNext } />
              </div>
            </div>
            ) }
        </div>
      </div>
      );
  }
})

const SnackbarExampleSimple = React.createClass({

  getInitialState() {
    return {
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open: false,
    }
  },

  handleTouchTap() {
    this.setState({
      open: true,
    });
  },

  handleActionTouchTap() {
    this.setState({
      open: false,
    });
    alert('Event removed from your calendar.');
  },

  handleChangeDuration(event) {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  },

  handleRequestClose() {
    this.setState({
      open: false,
    });
  },

  render() {
    return (
      <div>
        <h1>Snackbar</h1>
        <RaisedButton onTouchTap={ this.handleTouchTap } label="Add to my calendar" />
        <br />
        <TextField floatingLabelText="Auto Hide Duration in ms" value={ this.state.autoHideDuration } onChange={ this.handleChangeDuration } />
        <Snackbar open={ this.state.open } message={ this.state.message } action="undo" autoHideDuration={ this.state.autoHideDuration } onActionTouchTap={ this.handleActionTouchTap } onRequestClose={ this.handleRequestClose }
        />
      </div>
      );
  }
})

var Others = React.createClass({
  render() {
    return (
      <div>
        <Tabs className="components-secondary-navbar">
          <Tab label="Dialog">
            <DialogExampleSimple />
            <SnackbarExampleSimple />
          </Tab>
          <Tab label="Stepper">
            <HorizontalLinearStepper />
          </Tab>
          <Tab label="Progress">
            <CircularProgressExampleSimple />
            <LinearProgressExampleSimple />
            <RefreshIndicatorExampleSimple />
            <RefreshIndicatorExampleLoading />
          </Tab>
        </Tabs>
      </div>
      );
  }
});

module.exports = Others
