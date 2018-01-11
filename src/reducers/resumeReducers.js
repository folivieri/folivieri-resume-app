import {
  RESUME_ACTION
} from 'constants/actionTypes'

export default function resumeReducer (state = 0, action) {
  switch (action.type) {
    case RESUME_ACTION:
      return state + action.payload
    default:
      return state
  }
}
