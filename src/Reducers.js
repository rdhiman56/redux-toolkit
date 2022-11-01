import { createReducer } from "@reduxjs/toolkit";


const intialState = {
    c : 0,
}

export const customReducer = createReducer(intialState, {
    
    increment: (state, action) => {
        state.c = state.c + 1
    },

    incrementByValue: (state, action) => {
        state.c += action.payload;
    },

    decrement: (state, action) => {
        state.c = state.c - 1
    }
});