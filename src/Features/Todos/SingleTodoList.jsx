import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./TodosSlice";
import { FaXmark } from "react-icons/fa6";
function SingleTodoList({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center justify-between px-4 py-2 my-1 border border-yellow-300 border-solid   shadow-md rounded-md">
      <div className="flex items-center justify-center gap-2 ">
        <button
          onClick={() => dispatch(toggleTodo({ id }))}
          className=" cursor-pointer"
        >
          <div></div>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className=" cursor-pointer size-4 mt-2"
          />
        </button>
        <p
          className={
            completed
              ? " line-through font-semibold text-lg  text-black text-opacity-50 "
              : "font-semibold text-lg"
          }
        >
          {title}
        </p>
      </div>

      <button onClick={() => dispatch(removeTodo({ id }))}>
        <FaXmark className=" size-5" />
      </button>
    </div>
  );
}

export default SingleTodoList;
