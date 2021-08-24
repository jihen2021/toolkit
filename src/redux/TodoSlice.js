import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: false },
        
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = { id: Date.now, title: action.payload.title, completed: action.payload.completed };
            state.push(newTodo)

        },
        // a repeter::les liste cheked
        toggleCopmlete:(state,action)=>{
            const index=state.findIndex((todo)=>todo.id===action.payload.id);
            state[index].completed=action.payload.completed;

        },
        //delete todo
        DeleteTodo:(state,action)=>{
           return state.filter((todo)=> todo.id!== action.payload.id)
        }
       

    }
})
export  const {addTodo,toggleCopmlete,DeleteTodo} =TodoSlice.actions;
export default TodoSlice.reducer;