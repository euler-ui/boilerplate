import * as types from '../constants/ActionTypes'

const builds = (state = [], action) => {
  switch (action.type) {
    case types.GET_BUILD_LIST:
      return action.builds;
    default:
      return state
  }
}

export default builds
