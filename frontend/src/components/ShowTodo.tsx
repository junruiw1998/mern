import styles from "./ShowTodo.module.css";
import { Todo } from "../types";
import { useTodoContext } from "../hooks/useTodoContext";
import axios from "axios";

type ShowTodoTypes = {
  todo: Todo;
};

export const ShowTodo = ({ todo }: ShowTodoTypes) => {
  const { dispatch } = useTodoContext();

  const handleDelete = async () => {
    console.log("enter");
    try {
      const response = await axios.delete(
        `http://localhost:4000/todo/${todo._id}`
      );
      dispatch({ type: "deleteTodo", payload: response.data });
      console.log("todo is deleted", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("different error than axios");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h4>{todo.title}</h4>
      <p>
        <strong>Due Date:</strong>
        {todo.date}
      </p>
      <p>
        <strong>Priority:</strong>
        {todo.priority}
      </p>

      <button className={styles.delete} onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};
