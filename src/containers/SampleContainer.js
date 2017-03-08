import Sample from 'components/Sample';
import * as actions from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
var SampleContainer = React.createClass({
  render: function() {
    return (
      <Sample {...this.props} />
    );
  },
  componentDidMount: function() {
    var me = this;
    var props = this.props;
    props.fetchSampleData(props.path);
  }
});

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleContainer)