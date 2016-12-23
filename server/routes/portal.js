var _ = require('lodash');

const portal = (router) => {
  var users = [{
    id: "111",
    inviteCode: "1234567",
    userName: "tom",
    userNickName: "tom nick",
    userPassword: "11",
    userEmail: "tom@primeton.com",
    platformRoles: [
      {
        roleCode: "tenant_admin"
      },
      {
        roleCode: "platform_admin"
      },
      {
        roleCode: "product_manager"
      }
    ],
    tenantCode: "001",
    tenantName: "",
    lastLoginTime: "dwdw"
  }, {
    id: "112",
    inviteCode: "12345678",
    userName: "jack",
    userPassword: "11111111",
    userEmail: "jack@primeton.com",
    platformRoles: [
      {
        roleCode: "tenant_admin"
      }
    ],
    tenantCode: "001",
    tenantName: "",
    lastLoginTime: ""
  }, {
    id: "113",
    inviteCode: "12345679",
    userName: "james",
    platformRoles: [
      {
        roleCode: "platform_admin"
      }
    ],
    userPassword: "11111111",
    userEmail: "james@primeton.com",
    tenantCode: "001",
    tenantName: "",
    lastLoginTime: ""
  }]

  var portalPageInfo = {
    productsData: 10,
    usersData: 5,
    releaseData: 8
  }

  router.route('/portal/total').get((req, res) => {
    console.log("req.cookies", req.cookies);
    return res.json(portalPageInfo);
  });

  router.route('/portal/users/password').put((req, res) => {
    console.log("/portal/users/password", req.query);
    var body = req.query;
    var userName = body.userName;
    var oldP = body.oldPassword;
    var newP = body.newPassword;
    for (var i = 0; i < users.length; i++) {
      if (users[i].userName == userName || users[i].userPassword == oldP) {
        users[i].userPassword = newP;
        res.json(true || "");
      }
    }
    res.json(false || "");
  });

  router.route('/portal/users/logout').post((req, res) => {
    res.json(true || "");
  });


  router.route('/portal/users/login').post((req, res) => {
    console.log("/portal/users/login", req.body);
    var body = req.body;
    var userName = body.userName;
    var userEmail = body.userEmail;
    var pwd = body.userPassword;
    var result = _.find(users, (user) => {
      return (user.userName === userName || user.userEmail === userEmail) && user.userPassword === pwd
    })
    console.log(result);
    res._headers["x-cbc-accessToken"] = "token";

    if (result) {
      res.json(result || "");
    } else {
      res.json({
        "type": null,
        "cause": null,
        "message": "login failed!!!",
        "errorCode": {
          "errorCode": "100001",
          "errorMessage": "login failed"
        }
      });
    }
  });
  var sleep = function(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds) {
      ;
    }
  }
  var iii = 100;
  router.route('/portal/users/register').put((req, res) => {
    var body = req.body;
    var inviteCode = body.inviteCode;
    var userName = body.userName;
    var userEmail = body.userEmail;
    var password = body.userPassword;
    users.push({
      id: iii,
      inviteCode: inviteCode,
      userName: userName,
      platformRoles: [
        {
          roleCode: ""
        }
      ],
      userPassword: password,
      userEmail: userEmail,
      tenantCode: "",
      tenantName: "",
      lastLoginTime: ""
    });
    iii++;
    res.send(true);
  });
  router.route('/portal/users/send/verifycode/:userEmail').post((req, res) => {
    var body = req.params;
    var userEmail = body.userEmail;
    var result = _.find(users, (user) => {
      return user.userEmail === userEmail
    })
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
  router.route('/portal/users/password/email').put((req, res) => {
    var body = req.query;
    var userEmail = body.userEmail;
    var verifyCode = body.verifyCode;
    var newPassword = body.newPassword;
    var result = _.find(users, (user) => {
      return user.userEmail === userEmail
    })
    if (result && verifyCode) {
      result.password = newPassword;
      res.send(true);
    }
  });
  router.route('/portal/inviteCodes/apply').put((req, res) => {
    var body = req.body;
    res.send(true);
  });


  var applicants = [{
    inviteCode: "ABCDEFGD",
    inviteCodeType: "xxx",
    inviteCodeStatus: "2",
    inviteCodeMax: "xxx",
    invitedUserCount: "xxx",
    tenantId: "xxx",
    tenantCode: "xxx",
    toUserEmail: "xxxxxdwdwxxxxxxxx@xxxxx.com",
    toUserFullName: "xxx",
    toUserMobile: "18317115321",
    toUserCompany: "普元信息技术股份有限公司",
    createdTime: 1472694503643
  },
    {
      inviteCode: "xxx2",
      inviteCodeType: "xxx2",
      inviteCodeStatus: "2",
      inviteCodeMax: "xxx",
      invitedUserCount: "xxx",
      tenantId: "xxx2",
      tenantCode: "xxx2",
      toUserEmail: "xxx2",
      toUserFullName: "xxx2",
      toUserMobile: "xxx2",
      toUserCompany: "xxx2"
    },
    {
      inviteCode: "xxx2",
      inviteCodeType: "xxx2",
      inviteCodeStatus: "1",
      inviteCodeMax: "xxx",
      invitedUserCount: "xxx",
      tenantId: "xxx2",
      tenantCode: "xxx2",
      toUserEmail: "xxx2",
      toUserFullName: "xxx2",
      toUserMobile: "xxx2",
      toUserCompany: "xxx2"
    }]

  router.route('/portal/inviteCodes/status/:status').get((req, res) => {
    console.log("status: " + req.params.status);
    var result = [];
    for (var i = 0, l = applicants.length; i < l; i++) {
      if (applicants[i].inviteCodeStatus == req.params.status) {
        result.push(applicants[i]);
      }
    }
    res.json(result);
  });

  router.route('/portal/inviteCodes/send').put((req, res) => {
    console.log("inviteCode: " + req.body.inviteCode + " fromUserName: " + req.body.fromUserName + " toUserEmail: " + req.body.toUserEmail);
    var isSendSuccess = false;
    for (var i = 0, l = applicants.length; i < l; i++) {
      if (applicants[i].inviteCode == req.body.inviteCode) {
        applicants[i].inviteCodeStatus == 1;
        isSendSuccess = true;
      }
    }
    res.json(isSendSuccess);
  });

  router.route('/portal/inviteCodes/invalid/:inviteCode').put((req, res) => {
    console.log("inviteCode: " + req.params.inviteCode);
    var isSendSuccess = false;
    for (var i = 0, l = applicants.length; i < l; i++) {
      if (applicants[i].inviteCode == req.params.inviteCode) {
        applicants[i].inviteCodeStatus == 5;
        isSendSuccess = true;
      }
    }
    res.json(isSendSuccess);
  });
}
module.exports = portal
