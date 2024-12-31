import React, { useReducer } from "react";

const initialState = { count: 0 };

const Actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  CHANGE_COUNT: "CHANGE_COUNT",
};

function reducer(state, action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return { count: state.count + 1 };
    case Actions.DECREMENT:
      return { count: state.count - 1 };
    case Actions.RESET:
      return { count: 0 };
    case Actions.CHANGE_COUNT:
      return { count: action.payload };
    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: Actions.INCREMENT })}>+</button>
      Count: {state.count}
      <button onClick={() => dispatch({ type: Actions.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: Actions.RESET })}>Reset</button>
      <input
        type="number"
        value={state.count}
        onChange={(e) => dispatch({ type: Actions.CHANGE_COUNT, payload: Number(e.target.value) })}
      />
    </>
  );
}