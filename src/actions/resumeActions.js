import {
  RESUME_ACTION
} from 'constants/actionTypes'

export function resumeAction (selectedSection) {
  return {
    type: RESUME_ACTION,
    payload: selectedSection
  }
}
