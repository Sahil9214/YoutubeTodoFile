import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoData } from "../Redux/action";
//rafce
const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    let payload = {
      title: text,
      status: false,
    };
    setText("");
    dispatch(addTodoData(payload));

  };

  return (
    <div>
      <input placeholder="Add Todo" type="text" onChange={handleChange} value={text} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
