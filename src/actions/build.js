import * as types from '../constants/ActionTypes'
import 'whatwg-fetch'

export const getBuildList = () => {
  return dispatch => {
    fetch("/api/builds").then((response) => {
      return response.json();
    }).then((json) => {
      dispatch({
        type: types.GET_BUILD_LIST,
        builds: json
      })
    })
  }
}

export const openBuildPage = (build) => {
  return {
    type: types.OPEN_BUILD_PAGE,
    build: build
  }
}

export const startBuild = (buildId) => {
  return dispatch => {
    dispatch({
      type: types.START_BUILD,
      buildId: buildId
    })
    fetch(`/api/builds/run/${buildId}`, {
      method: "PUT"
    }).then((response) => {
      return response.json();
    }).then((instanceId) => {
      dispatch({
        type: types.START_BUILD_RESULT,
        instanceId: instanceId
      })
    }).catch((error) => {
      console.log('Error', error)
      dispatch({
        type: types.BUILD_ERROR
      })
    })
  }
}

export const queryBuildProgress = (instanceId) => {
  return dispatch => {
    fetch(`/api/builds/progress/${instanceId}`).then((response) => {
      return response.json();
    }).then((result) => {
      dispatch({
        type: types.QUERY_BUILD_PROCESS_RESULT,
        result: result
      })
    }).catch((error) => {
      console.log('Error', error)
      dispatch({
        type: types.BUILD_ERROR
      })
    })
  }
}

export const queryBuildLogs = (instanceId) => {
  return dispatch => {
    fetch(`/api/builds/logs/${instanceId}`).then((response) => {
      return response.json();
    }).then((result) => {
      dispatch({
        type: types.QUERY_BUILD_LOGS_RESULT,
        result: result
      })
    }).catch((error) => {
      console.log('Error', error)
      dispatch({
        type: types.BUILD_ERROR
      })
    })
  }
}