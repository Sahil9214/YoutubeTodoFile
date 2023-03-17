import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
  TODO_SUCCESS,
  UPDATE_TODO,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  todo: [],
};

//action =>{type,payload}
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todo: payload,
      };
    }

    case TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todo: [...state.todo, payload],
      };
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    }

    default: {
      return state;
    }
  }
};
