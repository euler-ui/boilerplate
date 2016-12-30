import React from 'react'
import BuildInfo from './BuildInfo'
import BuildStatusBtn from './BuildStatusBtn'
import Console from './Console'
const BuildRunner = React.createClass({
  componentDidMount() {
    var model = this.props.build && this.props.build.get("model");
    if (!model) {
      this.props.router.push("/home/realworld");
    }
  },
  doBuild() {
    var build = this.props.build;
    var buildId = build.get("model").id;
    this.props.actions.startBuild(buildId);
  },

  render() {
    var build = this.props.build;
    var actions = this.props.actions;
    return (
      <div className="realworld-build">
        <div className="realworld-build-main">
          <BuildInfo model={ build.get("model") } />
          <BuildStatusBtn progress={ build.get("progress") } instanceId={ build.get("instanceId") } doBuild={ this.doBuild } queryBuildProgress={ actions.queryBuildProgress } />
        </div>
        <Console logs={ build.get("logs") } instanceId={ build.get("instanceId") } queryBuildLogs={ actions.queryBuildLogs } />
      </div>
      );
  }
});

module.exports = BuildRunner
