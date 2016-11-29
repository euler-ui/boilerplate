import { combineReducers } from 'redux'
const samples = (state = [], action) => {
  console.log("I'm handling action:", action.type);
  switch (action.type) {
    case 'RECEIVE_SAMPLE':
      return state.map(sample => {
          if (sample.path !== action.path) {
            return sample
          }
          return Object.assign({}, sample, {
            code: action.code
          })
        }
      )
    case 'RECEIVE_SAMPLES':
      return action.samples
    case 'SHOW_EDITOR':
      return state.map(sample => {
          if (sample.path !== action.path) {
            return sample
          }
          return Object.assign({}, sample, {
            isEditorVisible: true
          })
        }
      )
    case 'HIDE_EDITOR':
      return state.map(sample => {
          if (sample.path !== action.path) {
            return sample
          }
          return Object.assign({}, sample, {
            isEditorVisible: false
          })
        }
      )
    case 'UPDATE_EDITOR':
      return state.map(sample => {
          if (sample.path !== action.path) {
            return sample
          }
          return Object.assign({}, sample, {
            editingCode: action.code
          })
        }
      )
    default:
      return state
  }
}

const rootReducer = combineReducers({
  samples
})

export default rootReducer
