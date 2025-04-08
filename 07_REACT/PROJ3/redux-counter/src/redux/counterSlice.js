import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    // this can be any data structure
    initialState: {
        value:0
    },
    //action
    reducers:{
            increment: (state ,action )=> {
            // console.log(state)  // proxy initial state object
            console.log({action})
            state.value += action.payload;
        },

        decrement: (state, action) => {
            state.value -= action.payload ;
        },

        reset:(state)=>{
            state.value = 0
        }
    }
})

// since this is a builtin library function we use createSlice.reducers as createSlice.actions below
export const { increment , decrement , reset } = counterSlice.actions

export default counterSlice.reducer ;