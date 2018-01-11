import {combineReducers} from 'redux'
import exampleReducer from './exampleReducers'
import resumeReducer from './resumeReducers'
import navigationReducer from './navigationReducers'
export default combineReducers({
  exampleReducer, resumeReducer, navigationReducer
})
