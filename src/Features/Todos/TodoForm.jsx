import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodosSlice";
function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(title);
    const newTodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
