import SampleContainer from "./SampleContainer"
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RenderMixin from "../utility/RenderMixin"
var SamplesConatiner = React.createClass({
  mixins: [RenderMixin], 
  render: function() {
    console.log("SamplesConatiner:render", arguments);
    var props = this.props;
    var origSamples = props.samples;
    var samples = origSamples.map(function(sample) {
      return (
        <SampleContainer {...sample} key={sample.path}/>
      );
    });
    return (
      <div>{samples}</div>
    );
  },
  componentWillMount: function() {
    var props = this.props;
    props.fetchSamples("public/samples/data.json");
  },
  // componentWillReceiveProps: function() {
  //   console.log("SamplesConatiner:componentWillReceiveProps", arguments);
  // },
  // componentDidUpdate: function() {
  //   console.log("SamplesConatiner:componentDidUpdate", arguments);
  // }
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