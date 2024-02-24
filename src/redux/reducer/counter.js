import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 10
    },
    dicrement: (state, action) => {
      state.count -= 100
    },
  },
});

export default counterReducer.reducer;

export const {dicrement, increment} = counterReducer.actions;