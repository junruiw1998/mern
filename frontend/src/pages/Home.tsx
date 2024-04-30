import { CreateTodo } from "../components/CreateTodo";
import { ShowTodo } from "../components/ShowTodo";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <ShowTodo
          todo="Watch a Youtube Video at midNight, and I feel happy"
          date="2024-5-1"
          priority="Low"
        />
        <ShowTodo
          todo="Play Soccer in college"
          date="2024-6-1"
          priority="Normal"
        />
        <ShowTodo todo="Review " date="2024-8-1" priority="High" />
      </div>
      <CreateTodo />
    </div>
  );
};
