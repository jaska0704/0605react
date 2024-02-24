import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:[],
}

const todoReducer = createSlice({
    name:"todo",
    initialState,
    reducers: {
        add:(state,claym)=>{
            return {...state, user:[...state.user, claym.payload]}
        },
        delet:(state, claym)=> {
            return {...state,user:state.user.filter((obj)=> obj.id !== claym.payload.id)}
        },
        edit: (state, claym) => {
            return {...state, user:state.user.map((item) => item.id === claym.payload.id ? claym.payload : item),};
        }
    },
});

export default todoReducer.reducer;

export const {add, delet, edit} = todoReducer.actions;