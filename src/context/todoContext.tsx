import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useParams } from "react-router-dom";
import { uid } from "uid";

type Todo = {
  id: string;
  isCompleted: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  editTodo: (id: string, item: Partial<Todo>) => void; 
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

export function useTodo() {
  return useContext(TodoContext);
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: any) => {
    const newTodo = { ...item, id: uid(), isCompleted: false };
    setTodos([newTodo, ...todos]);
    console.log(todos);
  };

  const editTodo = (id: any, item: any) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, ...item } : todo
    )
    setTodos(newTodos);

  }

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

  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo,editTodo, completeTodo, removeTodo, getTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;