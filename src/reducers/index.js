import { combineReducers } from 'redux'
import build from './build.js'
import builds from './builds.js'

const rootReducer = combineReducers({
  builds,
  build
})

export default rootReducer
