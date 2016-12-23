require('es6-promise').polyfill()
import * as types from '../constants/ActionTypes'
var eRequest = () => {

}
import processResult from './processResult'

export const userLogin = (user, pwd) => {
  var postData = {
    userPassword: pwd
  }
  if (user.indexOf("@") > 0) {
    postData.userEmail = user;
  } else {
    postData.userName = user;
  }
  return dispatch => {
    eRequest({
      url: "/portal/users/login",
      method: "POST",
      data: postData,
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        var body = response.body;
        if (body) {
          body["x-cbc-accessToken"] = response.headers["x-cbc-accesstoken"] || response.header["x-cbc-accesstoken"];
        }
        dispatch({
          type: types.USER_LOGIN,
          userInfo: body
        })
      })

    })
  }
}

export const userLogout = () => {

  return dispatch => {
    eRequest({
      url: "/portal/users/logout",
      method: "POST",
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.USER_LOGOUT,
          message: response.body
        })
      })

    })
  }
}

export const userRegisterTenant = (inviteCode, userName, userEmail, password) => {
  return dispatch => {
    eRequest({
      url: "/portal/users/register",
      method: "put",
      data: {
        "inviteCode": inviteCode,
        "userName": userName,
        "userEmail": userEmail,
        "userPassword": password
      },
      loadingMask: true
    }, (err, response) => {
      processResult(err, response, function() {
        dispatch({
          type: types.USER_REGISTER_TENANT,
          result: response.body
        })
      })

    })
  }
}

export const userRegisterInvite = (inviteCode, userName, userEmail, password) => {
  return dispatch => {
    eRequest({
      url: "/portal/users/register",
      method: "PUT",
      data: {
        "inviteCode": inviteCode,
        "userName": userName,
        "userEmail": userEmail,
        "userPassword": password
      },
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.USER_REGISTER_INVITE,
          result: response.body
        })
      })

    })
  }
}

export const userForgotPassword = (userEmail) => {
  return dispatch => {
    eRequest({
      url: "/portal/users/send/verifycode/:userEmail",
      method: "POST",
      restParams: {
        "userEmail": userEmail
      },
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.USER_FORGOT_PASSWORD,
          email: userEmail
        })
      })

    })
  }
}

export const userResetPassword = (userEmail, verifyCode, newPassword) => {
  return dispatch => {
    eRequest({
      url: "/portal/users/password/email",
      method: "PUT",
      queryParams: {
        "userEmail": userEmail,
        "verifyCode": verifyCode,
        "newPassword": newPassword
      },
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.USER_RESET_PASSWORD,
          result: response.body
        })
      })

    })
  }
}

export const openUserAccountModal = () => {
  return {
    type: types.OPEN_USER_ACCOUNT_MODAL
  }
}

export const closeUserAccountModal = () => {
  return {
    type: types.CLOSE_USER_ACCOUNT_MODAL
  }
}

//用户账户信息设置
export const editUserAccount = (accountData, cb) => {
  return dispatch => {
    eRequest({
      url: "/portal/users/password",
      method: "put",
      queryParams: accountData,
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.UPDATE_ACCOUNT_INFO,
          response: response.body
        })
        cb && cb();
      })

    })
  }
}

//申请邀请码
export const applyInvitationCode = (applyData) => {
  return dispatch => {
    eRequest({
      url: "/portal/inviteCodes/apply",
      method: "put",
      data: applyData,
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.APPLY_INVITATION_CODE,
          result: response.body
        })
      })

    })
  }
}

//根据邀请码状态查看所有申请人
export const getApplicantsByInvitationCodeStatus = (status) => {
  return dispatch => {
    eRequest({
      url: "/portal/inviteCodes/status/:status",
      restParams: {
        status: status
      },
      method: "get"
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.GET_APPLICANTS_BY_INVITATION_CODE_STATUS,
          result: response.body
        })
      })

    })
  }
}

//发送邀请码给申请人
export const sendInvitationCodeToApplicant = (inviteCode, applicantEmail) => {
  return dispatch => {
    eRequest({
      url: "/portal/inviteCodes/send",
      data: {
        inviteCode: inviteCode,
        fromUserName: JSON.parse(sessionStorage.getItem("userInfo")).userName,
        toUserEmail: applicantEmail
      },
      method: "put",
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.SEND_INVITATION_CODE_TO_APPLICANT,
          result: response.body,
          inviteCode: inviteCode
        })
      })

    })
  }
}

//邀请码失效
export const invalidInvitationCodeToApplicant = (inviteCode) => {
  return dispatch => {
    eRequest({
      url: "/portal/inviteCodes/invalid/:inviteCode",
      restParams: {
        inviteCode: inviteCode
      },
      method: "put",
      loadingMask: true
    }, (err, response) => {

      processResult(err, response, function() {
        dispatch({
          type: types.INVALID_INVITATION_CODE_TO_APPLICANT,
          result: response.body,
          inviteCode: inviteCode
        })
      })

    })
  }
}