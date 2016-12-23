import React from 'react';
import BuildList from './buildList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../../actions/build'

import './realworld.css'

var RealWorld = React.createClass({
  render() {
    var props = this.props;
    var children = props.children && React.cloneElement(props.children, {
      build: props.build,
      actions: props.actions
    })
    return (
      <section>
        { children || <BuildList actions={ props.actions } builds={ props.builds } router={ props.router } /> }
      </section>
      );
  }
});

const mapStateToProps = (state) => {
  return {
    builds: state.builds,
    build: state.build
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(RealWorld)
