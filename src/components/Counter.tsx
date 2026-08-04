import { useReducer, useState } from "react";

// create reducer function that has initial state and action and its type
const countReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: Number(state.count + 1) };
    case "DEC":
      return { count: Math.max(state.count - 1, 0) };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: state.count + Number(action.payload) };
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer hook with counterReducer and initial state that returns state and dispacth
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const [inputVal, setInputVal] = useState("");

  const handleSet = () => {
    dispatch({ type: "SET", payload: inputVal });
  };

  return (
    <div>
      <h1>count : {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "DEC" })}> ➖ </button>
        <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>
        <button onClick={() => dispatch({ type: "INC" })}> ➕ </button>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          name="inputVal"
          id="inputVal"
        />
        <button onClick={handleSet}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
