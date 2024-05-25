import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  //   { id: 1, title: "code daily", completed: true },
  //   { id: 2, title: "go for a walk", completed: false },
];
const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return [action.payload, ...state];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
