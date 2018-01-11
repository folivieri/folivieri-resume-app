import {
  NAVIGATION_ACTION
} from 'constants/actionTypes'

export function navigationAction (selectedSection) {
  return {
    type: NAVIGATION_ACTION,
    payload: selectedSection
  }
}
