import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./card/card";
import { nanoid } from "@reduxjs/toolkit";

export const CardCont = () => {
  const { user } = useSelector((state) => state.todo);
  console.log(user);

  return (
    <div>
      {user.map((item) => (
        <Card key={nanoid()} {...item} />
      ))}
    </div>
  );
};
