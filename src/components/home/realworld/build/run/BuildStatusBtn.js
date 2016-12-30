import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
var BuildStatusBtn = React.createClass({
  renderProgress() {
    var progressNum = this.props.progress.get("num");
    if (progressNum === "") {
      return
    }
    return (<div className="progress-btn__progress" style={ { width: progressNum + "%" } }>
              <div className="progress-btn__progress--running"></div>
            </div>)
  },
  componentDidUpdate(prevProps, prevState) {
    console.log("BuildStatusBtn did update", this.props.instanceId, this.props.progress.toObject());
    var instanceId = this.props.instanceId;
    if (instanceId) {
      this.timer = setTimeout(this.props.queryBuildProgress.bind(this, instanceId), 3000);
    }
  },
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.instanceId === nextProps.instanceId && this.props.progress === nextProps.progress) {
      return false;
    }
    return true;
  },
  render() {
    var props = this.props;
    var progressNum = props.progress.get("num");
    var displayText = progressNum !== "" ? ("Build Progress: " + progressNum + "%") : "Build";
    return (
      <div className="progress-btn">
        <RaisedButton label={ displayText } fullWidth={ true } primary={ true } disabled={ progressNum !== "" ? true : false } onClick={ props.doBuild } />
        { this.renderProgress() }
      </div>
      );
  }
})
export default BuildStatusBtn