import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice'

//configure store
export default configureStore({
    reducer: {
        todos: todoReducer,
    }
})