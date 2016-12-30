import React from 'react'

var Console = React.createClass({
  componentDidUpdate(prevProps, prevState) {
    console.log("Console did update", this.props.instanceId, this.props.logs.toArray());
    if (this.props.instanceId) {
      this.timer = setTimeout(this.props.queryBuildLogs.bind(this, this.props.instanceId), 3000);
    }
  },

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.instanceId === nextProps.instanceId && this.props.logs === nextProps.logs) {
      return false;
    }
    return true;
  },
  render() {
    var logs = this.props.logs.toArray().reverse().map((log, id) => {
      log = {
        __html: log.replace(/\n/g, "<br>")
      };
      return (<div key={ id } dangerouslySetInnerHTML={ log }>
              </div>)
    })
    return (
      <div className="realworld-build-console">
        { logs }
      </div>)
  }
})


export default Console
