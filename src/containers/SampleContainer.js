import Sample from '../components/Sample'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RenderMixin from "../utility/RenderMixin"
var SampleContainer = React.createClass({
    mixins: [RenderMixin], 
    render: function() {
      console.log("SampleContainer:render", arguments);
        return (
            <Sample {...this.props} />
        );
  },
  componentDidMount: function() {
    var me = this;
    var props = this.props;
    props.fetchSampleData(props.path);
  },
  // componentWillReceiveProps: function() {
  //   console.log("SampleContainer:componentWillReceiveProps", arguments);
  // },
  // componentDidUpdate: function() {
  //   console.log("SampleContainer:componentDidUpdate", arguments);
  // }
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