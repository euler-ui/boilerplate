import {NavItem} from 'react-bootstrap'
import { connect } from 'react-redux'
import RenderMixin from "../utility/RenderMixin"
var NavTree = React.createClass({
    mixins: [RenderMixin], 
  render: function() {
    console.log("NavTree:render", arguments);
    var samples = this.props.samples;
    var navs = samples.map(function(sample) {
      var path = sample.path
      return (
        <NavItem key={path} href={"#" + path.substring(0, path.indexOf("."))}>{sample.title}</NavItem>
      );
    });
    return (
        <div className="bs-docs-sidebar">
            <ul className="bs-docs-sidenav nav">
            {navs}
            </ul>
        </div>
    );
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.samples.length !== this.props.samples.length
    // return true
  }
  // componentWillReceiveProps: function() {
  //   console.log("NavTree:componentWillReceiveProps", arguments);
  // },
  // componentDidUpdate: function() {
  //   console.log("NavTree:componentDidUpdate", arguments);
  // }
});
export default connect(state => ({
    samples: state.samples
}))(NavTree)