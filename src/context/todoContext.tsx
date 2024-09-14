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
  updateStorage: any;
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
  function getStoredTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>(() => getStoredTasks());

  const addTodo = (item: any) => {
    const newTodo = {
      id: uid(),
      isCompleted: false,
      ...item
    };
    setTodos([newTodo, ...todos]);
    console.log(todos);
  };

  const editTodo = (id: any, item: any) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, ...item } : todo
    )
    setTodos(newTodos);
  }

  const completeTodo = (item: any) => {
    const newTodos = todos.map((todo) =>
      todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    console.log('checked:', item.name);
    setTodos(newTodos);
  };

  const removeTodo = (todo: Todo) => {
    setTodos((todos) => todos.filter((el) => el.id !== todo.id));
  };

  const getTodo = (id: string) => {
    return todos.find((el) => el.id === id);
  };

  const updateStorage = (tasks: any) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const submitSubtask = () => {
    
  }

  useEffect(() => {
    updateStorage(todos);
    console.log("Updated todos:", todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, completeTodo, removeTodo, getTodo, updateStorage }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;


