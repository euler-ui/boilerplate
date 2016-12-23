var build = require("./build")
var portal = require("./portal");
var express = require("express");

const combineRoutes = (routes) => {
  var router = express.Router();
  Object.keys(routes).forEach((key) => {
    routes[key](router);
  })
  return router;
}
const router = combineRoutes({
  build,
  portal
})

module.exports = router

//export default router
