import React from "react";
import { useSelector } from "react-redux";
import SingleTodoList from "./SingleTodoList";
function TodoList() {
  const todos = useSelector((state) => {
    return state.toos;
  });
  return (
    <div className="">
      {todos.map((todo) => {
        return <SingleTodoList key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default TodoList;
