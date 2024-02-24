import { useSelector, useDispatch } from "react-redux"
import React from "react";
import { increment, dicrement } from "./redux/reducer/counter";



function App() {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{data.count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(dicrement())}>-</button>
    </>
  );
}

export default App
