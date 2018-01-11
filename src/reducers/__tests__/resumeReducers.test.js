import { RESUME_ACTION } from 'constants/actionTypes'
import resumeReducer from '../resumeReducers'
describe('resumeReducer', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
  describe('resumeReducer test', () => {
    it('should increment by amount', () => {
      const testState = 0
      const target = 'title'
      const testAction = {
        type: RESUME_ACTION,
        payload: target
      }
      const expectedState = testState + target
      console.log('expectedState: ' + expectedState)
      const actualState = resumeReducer(testState, testAction)
      console.log('actualState: ' + actualState)
      expect(actualState).toEqual(expectedState)
    })
  })
})
