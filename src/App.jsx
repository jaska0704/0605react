import { useSelector, useDispatch } from "react-redux"
import React from "react";
import { increment, dicrement } from "./redux/reducer/counter";
import { Form } from "./components/form/form";
import { CardCont } from "./components/card-cont";



function App() {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{data.count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(dicrement())}>-</button>

      <Form/>
      <CardCont/>
    </>
  );
}

export default App
