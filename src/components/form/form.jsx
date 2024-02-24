import React from "react";
import { add } from "../../redux/reducer/todo";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export const Form = ({}) => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(add({ taskname: name, taskDate: date, id: nanoid() }));
    setName('');
    setDate('');
  };

  return (
    <form className="form-control flex justify-center items-center gap-6" onSubmit={submit}>
      <input
        className="px-7 py-2 bg-teal-200 rounded-xl"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        name="date"
      />
      <input
        className="px-7 py-2 bg-teal-200 rounded-xl"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
      />
      <button className="px-5 py-2 rounded-lg bg-indigo-500">submit</button>
    </form>
  );
};
