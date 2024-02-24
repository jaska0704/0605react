import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:[]
}

const todoReducer = createSlice({
    name:"todo",
    initialState,
    reducers: {
        add:(state,claym)=>{
            return {...state, user:[...state.user, claym.payload]}
        },
    },
});

export default todoReducer.reducer;

export const {add} = todoReducer.actions;