import { NAVIGATION_ACTION } from 'constants/actionTypes'
import navigationReducer, { navigate } from '../navigationReducers'
describe('navigationReducer', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
  describe('navigationReducer test', () => {
    it('should increment by amount', () => {
      const testState = 0
      const target = 'title'
      const testAction = {
        type: NAVIGATION_ACTION,
        payload: target
      }
      const expectedState = testState + target
      console.log('expectedState: ' + expectedState)
      const actualState = navigationReducer(testState, testAction)
      console.log('actualState: ' + actualState)
      expect(actualState).toEqual(expectedState)
    })
  })
})

describe('navigationReducer navigate', () => {
  it('should return false', () => {
    const testState = 0
    const target = 'title'
    const testAction = {
      type: NAVIGATION_ACTION,
      payload: target
    }
    const expectedState = false
    console.log('expectedState: ' + expectedState)
    const actualState = navigate(testState, testAction.payload)
    console.log('actualState: ' + actualState)
    expect(actualState).toEqual(expectedState)
  })
})
