import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div className=" m-auto  p-5  text-gray-800  w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%]  ">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoApp;
