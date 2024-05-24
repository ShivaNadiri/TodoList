import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./TodosSlice";
function SingleTodoList({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <p>id:{id}</p>
      <p className={completed ? "strike" : null}>title:{title}</p>
      <p>completed:{completed ? "true" : "false"}</p>
      <button onClick={() => dispatch(removeTodo({ id }))}>delete</button>
      <button onClick={() => dispatch(toggleTodo({ id }))}>toggle</button>
    </div>
  );
}

export default SingleTodoList;
