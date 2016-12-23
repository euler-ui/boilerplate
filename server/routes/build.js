var assert = require('assert');
var builds = require("./data.js");
var build = (router) => {

  var genID = () => {
    return (Math.random() + 1).toString(36).substring(2);
  }

  router.route('/builds').get((req, res) => {
    res.json(builds);
  });

  router.route('/builds/:buildId').put((req, res) => {
    var type = req.query.componentType;
    var data = req.body;
    var buildName = data.name;
    var repositoryURL = data.url;
    assert.ok(buildName);
    assert.ok(repositoryURL);
    builds.push({
      id: genID(),
      name: buildName,
      repository: repositoryURL,
      lastBuildStatus: "NA"
    });
    res.json(true);
  });

  router.route('/builds/run/:buildId').put((req, res) => {
    var buildId = req.params.buildId;
    assert.ok(buildId);

    var build = builds.filter((build) => {
      return build.id === buildId;
    })[0]
    assert.ok(build, "Build Id is wrong");
    var instanceId = genID();
    build.curInstanceId = instanceId;
    build.progress = 0;
    build.status = "RUNNING";
    build.lastBuildStatus = "RUNNING";
    build.st = new Date().getTime();
    delete build.time;
    res.json(instanceId);
  });

  router.route('/builds/progress/:instanceId').get((req, res) => {
    var instanceId = req.params.instanceId;
    assert.ok(instanceId);
    var build = builds.filter((build) => {
      return build.curInstanceId === instanceId;
    })[0]
    assert.ok(build, "instanceId is wrong");

    var progress = build.progress;
    var status = "RUNNING";

    // when progress > 50%, 1/3 chance to set status failure
    if (progress > 0.5 && parseInt(progress * 100) % 3 === 1) {
      status = "FAILURE";
      build.lastBuildStatus = "SUCCESS";
    } else {
      progress += parseInt(Math.random() * 50) / 100;
    }

    if (progress >= 1) {
      progress = 1;
      status = "SUCCESS";
      build.time = new Date().getTime() - build.st;
      build.lastBuildStatus = "SUCCESS";
    }

    build.progress = progress;
    build.status = status;
    res.json({
      progress: progress,
      status: status,
      time: build.time
    })
  });
  router.route('/builds/logs/:instanceId').get((req, res) => {
    var instanceId = req.params.instanceId;
    assert.ok(instanceId);
    var build = builds.filter((build) => {
      return build.curInstanceId === instanceId;
    })[0]
    assert.ok(build, "instanceId is wrong");
    if (build.status === "RUNNING") {
      res.json("Current Build Progress:" + parseInt(build.progress * 100) + "%")
    } else {
      res.json("");
    }

  });
}
module.exports = build
