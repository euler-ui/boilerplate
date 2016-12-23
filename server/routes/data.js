var genID = () => {
  return (Math.random() + 1).toString(36).substring(2);
}
var builds = [{
  id: genID(),
  name: 'DEV Daily Build',
  repository: "https://github.com/euler-ui/boilerplate#dev-daily",
  lastBuildStatus: 'SUCCESS'
}, {
  id: genID(),
  name: 'DEV WAR Build',
  repository: "https://github.com/euler-ui/boilerplate#dev-war",
  lastBuildStatus: 'FAILURE'
}, {
  id: genID(),
  name: 'SIT Daily Build',
  repository: "https://github.com/euler-ui/boilerplate#sit-daily",
  lastBuildStatus: 'SUCCESS'
}, {
  id: genID(),
  name: 'SIT WAR Build',
  repository: "https://github.com/euler-ui/boilerplate#sit-war",
  lastBuildStatus: 'FAILURE'
}, {
  id: genID(),
  name: 'UAT Daily Build',
  repository: "https://github.com/euler-ui/boilerplate#uat-daily",
  lastBuildStatus: 'SUCCESS'
}, {
  id: genID(),
  name: 'UAT WAR Build',
  repository: "https://github.com/euler-ui/boilerplate#uat-war",
  lastBuildStatus: 'FAILURE'
}, {
  id: genID(),
  name: 'PROD Daily Build',
  repository: "https://github.com/euler-ui/boilerplate#prod-daily",
  lastBuildStatus: 'SUCCESS'
}, {
  id: genID(),
  name: 'PROD WAR Build',
  repository: "https://github.com/euler-ui/boilerplate#prod-war",
  lastBuildStatus: 'FAILURE'
}]
module.exports = builds