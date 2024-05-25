import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodosSlice";
import { toast } from "react-toastify";

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(title);
    title.trim();
    if (title.trim() === "") {
      toast.info("Please enter your task!");
      return;
    }
    const newTodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  }
  return (
    <div className="  ">
      <form
        onSubmit={handleSubmit}
        className="w-80% py-5 flex items-center justify-evenly"
      >
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task"
          className="border border-2 border-white w-full h-[50px] rounded-lg focus:border-orange-500 focus:outline-none  font-semibold text-lg"
        />
        <button
          type="submit"
          className="w-[80px]  -ml-[100px] h-10  bg-orange-500 z-10 rounded-lg text-white font-semibold"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
