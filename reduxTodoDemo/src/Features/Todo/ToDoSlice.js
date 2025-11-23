import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id:1, text:"Hello"}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducer: {
        name: 'todo',
        initialState,
        reducer: {
            addTodo: (state, action) => {
                const todo = {
                    id:nanoid(),
                    text: action.payload,
                }
                state.todos.push(todo);
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id != action.payload)
            },
            deletTodo: (state,action) => {
                state.todos = [];
            },
            updateTodo: (state, action) => {
                const {id, text} = action.payload;

                const index = state.todos.findIndex((todo) => todo.id === id)

                if(index !== -1) {
                    state.todos[index].text = text;
                }
            },
        }
    }
})

export const {addTodo, removeTodo, deleteTodo, updateTodo} =todoSlice.actions

export default todoSlice.reducer