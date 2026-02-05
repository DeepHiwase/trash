import { useReducer } from "react";

const initialState = 0; // initialCount
const reducer = (state, action) => {
  // countReducer
  // return new state based on what type of action
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const init = (initialValue) => {
  console.log("init function called - this only runs once!");

  const savedCount = localStorage.getItem("count");

  if (savedCount !== null) {
    console.log("Found saved count:", savedCount);
    return parseInt(savedCount);
  }

  console.log("No saved count, using initial value:", initialValue);
  return initialValue;
};

export const CounterWithInit = () => {
  const [count, dispatch] = useReducer(reducer, initialState, init); // (countReducer, initialCount)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
