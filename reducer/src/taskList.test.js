import { initialState, tasksReducer } from "./tasksReducer"

test('adds a task when receiving the added action', () => {
  const action = { type: 'added', id: 1, text: 'Testing with Jest' };
  const expectedState = [
    {
      id: 1,
      text: 'Testing with Jest',
      done: false
    }
  ]
  const nextState = tasksReducer(initialState, action)
  expect(nextState).toStrictEqual(expectedState)
})