import {
  NAVIGATION_ACTION
} from 'constants/actionTypes'

export const navigate = (state, target) => {
  var loc = document.location.toString().split('#')[0]
  document.location = loc + '#' + target
  if (target === 'summary') {
    var element = document.getElementById('titlecontent')
    // -> removing the class
    element.classList.remove('titlecontentclass')

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    void element.offsetWidth
    // -> and re-adding the class
    element.classList.add('titlecontentclass')
  }
  return false
}

export default function navigationReducer (state = 0, action) {
  switch (action.type) {
    case NAVIGATION_ACTION:
      navigate(state, action.payload)
      return state + action.payload
    default:
      return state
  }
}
