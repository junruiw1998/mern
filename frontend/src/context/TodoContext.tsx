import { createContext, useReducer } from "react";
import {
  TodoContextProps,
  TodoReducerAction,
  TodoReducerState,
} from "../types";

export const TodoContext = createContext<{
  state: TodoReducerState;
  dispatch: React.Dispatch<TodoReducerAction>;
}>({
  state: { todos: [] }, // Providing default state matching TodoReducerState
  dispatch: () => {}, // A no-op function for dispatch
});

const initialState = {
  todos: [],
};

const todoReducer = (state: TodoReducerState, action: TodoReducerAction) => {
  switch (action.type) {
    case "getTodos":
      return {
        todos: action.payload,
      };
    case "createTodo":
      return {
        todos: [action.payload, ...state.todos],
      };
    case "deleteTodo":
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
