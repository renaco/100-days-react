import React, { useReducer } from 'react'

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error('')
  }
}

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>
  )
}
