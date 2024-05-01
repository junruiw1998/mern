export type Todo = {
  _id: string;
  title: string;
  date: string;
  priority: "High" | "Normal" | "Low";
};

export type TodoContextProps = {
  children: React.ReactNode;
};

export type TodoReducerState = {
  todos: Todo[];
};

export type TodoReducerAction =
  | { type: "getTodos"; payload: Todo[] }
  | { type: "createTodo"; payload: Todo }
  | { type: "deleteTodo"; payload: Todo };
