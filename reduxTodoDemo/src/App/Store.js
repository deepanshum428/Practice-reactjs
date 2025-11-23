import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/Todo/toDoSlice.js'

export const store = configureStore({
    reducer: todoReducer
})