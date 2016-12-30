import React from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const BasicInfo = () => (
<div>
  <h1>Basic</h1>
  <TextField hintText="Buid Name" />
  <br />
  <TextField hintText="Repository URL" />
  <br />
  <DatePicker hintText="Start Date" container="inline" mode="landscape" />
  <div>etcs.</div>
</div>
)

const BuildInfo = React.createClass({

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
        return <BasicInfo />;
      case 1:
        return <p>AdvancedInfo</p>;
      case 2:
        return <p>Others</p>;
      default: return '';
    }
  },

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {
      margin: '0 16px',
      textAlign: "center"
    };

    if (finished) {
      this.props.router.goBack();
    }

    return (
      <div style={ { width: '100%', maxWidth: 700, margin: 'auto' } }>
        <Stepper activeStep={ stepIndex }>
          <Step>
            <StepLabel>Basic Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Advanced Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Others</StepLabel>
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
              { this.getStepContent(stepIndex) }
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

module.exports = BuildInfo