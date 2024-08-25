import { createContext, useState, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { uid } from "uid";

type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  completeTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  getTodo: (id: string) => Todo | undefined;
};

type TodoProviderProps = {
  children?: ReactNode;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

const TodoProvider = ({ children }: TodoProviderProps) => {
  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { id: uid(), text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (todo: Todo) => {
    setTodos((todos) =>
      todos.map((el) =>
        el.id === todo.id ? { ...el, isCompleted: !el.isCompleted } : el
      )
    );
  };

  const removeTodo = (todo: Todo) => {
    setTodos((todos) => todos.filter((el) => el.id !== todo.id));
  };

  const getTodo = (id: string) => {
    return todos.find((el) => el.id === id);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, completeTodo, removeTodo, getTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;