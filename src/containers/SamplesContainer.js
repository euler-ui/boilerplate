import SampleContainer from "./SampleContainer";
import * as actions from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
var SamplesConatiner = React.createClass({
  render: function() {
    var props = this.props;
    var origSamples = props.samples;
    var samples = origSamples.map(function(sample) {
      return (
        <SampleContainer {...sample} key={ sample.path } />
      );
    });
    return (
      <div>
        { samples }
      </div>
    );
  },
  componentWillMount: function() {
    this.props.fetchSamples("samples/data.json");
  },
});
const mapStateToProps = (state) => {
  return {
    samples: state.samples
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SamplesConatiner)