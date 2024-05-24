import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/Todos/TodosSlice";
export const store = configureStore({
  reducer: {
    toos: todoReducer,
  },
});
