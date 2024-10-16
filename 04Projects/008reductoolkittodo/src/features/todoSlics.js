import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    //The name is used as a prefix for the action types generated for the reducers in that slice. For example, 
    // if you define a reducer addTodo, the action type will be 'todo/addTodo'.
    initialState,
    reducers: {
        addTodo: (state, action) => { // action is a action object created by action creator in react redux.
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer