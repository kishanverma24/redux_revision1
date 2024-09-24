import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Hello world" },
    { id: 55, text: "Redux revision" },
  ],
};
// function sayHello() {
//   console.log("Hello World");
// }

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // hello: sayHello   --> property and its function --> key - function
    addTodo: (state, action) => {
      // state gives the current value of the variable in the store while action gives the values or data given while calling the current property
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is also an object
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; // ye jo addTodo and removeTodo reducers hai inhi ke through hm state ko manipulate krne ki functionality provide krenge ye kitne bhi ho skte hai aurr hme inn sbhi ko export krna hota hai to use it in our components

export default todoSlice.reducer; // exporting in the name of todoReducer which we are using in the store

