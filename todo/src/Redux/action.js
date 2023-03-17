import {
  ADD_TODO_REQUEST,
  TODO_FAILURE,
  TODO_REQUEST,
  TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  UPDATE_TODO,
} from "./actionType";
import axios from "axios";

export const getTodoData = () => async (dispatch) => {
  dispatch({ type: TODO_REQUEST });
  try {
    let res = await axios.get("http://localhost:8080/todos");
    console.log("resget", res);
    dispatch({ type: TODO_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: TODO_FAILURE });
  }
};

export const addTodoData = (value) => async (dispatch) => {
  dispatch({ type: ADD_TODO_REQUEST });
  try {
    let res = await axios.post(`http://localhost:8080/todos`, value);
    console.log("resAdd", res.data);
    dispatch({ type: ADD_TODO_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADD_TODO_FAILURE });
  }
};

export const updateTodo = (id, status) => async (dispatch) => {
  try {
    let res = await axios.patch(`http://localhost:8080/todos/${id}`, {
      status: !status,
    });
console.log("update",res.data)
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (err) {}
};
