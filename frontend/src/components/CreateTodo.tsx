import styles from "./CreateTodo.module.css";
import { useState } from "react";
import { SyntheticEvent } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import axios from "axios";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useTodoContext();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const todo = { title, date, priority };
    try {
      const response = await axios.post("http://localhost:4000/todo", todo);
      dispatch({ type: "createTodo", payload: response.data });
      console.log("new todo added", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Handle errors from Axios specifically
        console.log(error);
        setError(`Failed to add todo: ${error.response.data.error}`);
      } else {
        // Handle non-Axios errors
        setError("An unexpected error occurred while adding the todo.");
      }
    }
  };
  return (
    <form className={styles.create} onSubmit={handleSubmit}>
      <label>Task:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Due Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label>Priority?:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="" disabled>
          Select Priority
        </option>
        <option value="High">High</option>
        <option value="Normal">Normal</option>
        <option value="Low">Low</option>
      </select>
      <button>Add</button>
      {error && <div className={styles.error}>{error}</div>}{" "}
      {/* Error message display */}
    </form>
  );
};
