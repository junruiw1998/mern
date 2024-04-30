import styles from "./CreateTodo.module.css";

export const CreateTodo = () => {
  return (
    <form className={styles.create}>
      <label>Task:</label>
      <input />
      <label>Due Date:</label>
      <input type="date" />
      <label>Priority?:</label>
      <select>
        <option>High</option>
        <option>Normal</option>
        <option>Low</option>
      </select>
      <button>Add</button>
    </form>
  );
};
