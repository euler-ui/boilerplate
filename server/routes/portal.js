const portal = (router) => {
  var users = [{
    id: "guest",
    userName: "guest",
    userPassword: "guest"
  }]

  router.route('/portal/users/login').post((req, res) => {
    var body = req.body;
    var userName = body.userName;
    var pwd = body.userPassword;
    var user = users.filter((user) => {
      return user.userName === userName && user.userPassword === pwd
    })[0]
    setTimeout(function() {
      if (user) {
        res.json({
          "status": "SUCCESS",
          "userName": user.userName
        });
      } else {
        res.json({
          "status": "FAILURE"
        });
      }
    }, 3000)
  });
}
module.exports = portal
