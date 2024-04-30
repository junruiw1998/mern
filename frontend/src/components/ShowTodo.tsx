import styles from "./ShowTodo.module.css";

type ShowTodoProps = {
  todo: string;
  date: string;
  priority: "High" | "Normal" | "Low";
};

export const ShowTodo = ({ todo, date, priority }: ShowTodoProps) => {
  return (
    <div className={styles.container}>
      <h4>{todo}</h4>
      <button>Delete</button>
      <p>
        <strong>Due Date:</strong>
        {date}
      </p>
      <p>
        <strong>Priority:</strong>
        {priority}
      </p>
      <button>delete</button>
    </div>
  );
};
