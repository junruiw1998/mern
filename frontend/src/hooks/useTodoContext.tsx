import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  // the useTodoContext custom hook requires <the component using it>
  //to be wrapped in a TodoContextProvider to function correctly.
  if (!context) {
    throw Error("The Component is not wrapped within TodoContext.Provider");
  }
  return context;
};
