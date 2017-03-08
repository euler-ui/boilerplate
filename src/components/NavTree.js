import { NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';
var NavTree = React.createClass({
  render: function() {
    console.log("NavTree:render", arguments);
    var samples = this.props.samples;
    var navs = samples.map(function(sample) {
      var path = sample.path
      return (
        <NavItem key={ path } href={ "#" + path.substring(0, path.indexOf(".")) }>
          { sample.title }
        </NavItem>
      );
    });
    return (
      <div className="bs-docs-sidebar">
        <ul className="bs-docs-sidenav nav">
          { navs }
        </ul>
      </div>
    );
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.samples.length !== this.props.samples.length;
  }
});
export default connect(state => ({
  samples: state.samples
}))(NavTree)