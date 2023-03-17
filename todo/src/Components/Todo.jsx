import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoData, updateTodo } from "../Redux/action";
import TodoInput from "./TodoInput";
const Todo = () => {
  //getState,subscribe,dispatch

  const dispatch = useDispatch();
  const { isLoading, isError, todo } = useSelector((state) => state.reducer);


  const handleUpdate = (id, status) => {
    dispatch(updateTodo(id, status));
  };

  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  return (
    <div>
      <TodoInput />
      {isLoading && <h1>Loading....</h1>}
      {isError && <h1>ERRORO....</h1>}
      {todo?.length > 0 &&
        todo?.map((el) => {
          return (
            <div key={el.id}>
              <h2>
                {el.title}----{el.status ? "pending" : "completed"}
              </h2>
              <button onClick={() => handleUpdate(el.id, el.status)}>
                Toggle
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
