import { useEffect } from "react";
import { CreateTodo } from "../components/CreateTodo";
import { ShowTodo } from "../components/ShowTodo";
import { useTodoContext } from "../hooks/useTodoContext";
import styles from "./Home.module.css";
import axios from "axios";
import { Todo } from "../types";

export const Home = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const { state, dispatch } = useTodoContext();
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await axios.get<Todo[]>("http://localhost:4000/todo");
        dispatch({ type: "getTodos", payload: todos.data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, [dispatch]);
  return (
    <div className={styles.home}>
      <div>
        {state.todos.map((todo: Todo) => {
          return <ShowTodo key={todo._id} todo={todo} />;
        })}
      </div>
      <CreateTodo />
    </div>
  );
};
