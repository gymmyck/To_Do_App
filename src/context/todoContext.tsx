import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { uid } from "uid";

type Subtask = {
  id: string,
  name: string,
  isCompleted: boolean,
}

type Todo = {
  id: string;
  isCompleted: boolean;
  subtasks: Subtask[];
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  editTodo: (id: string, item: Partial<Todo>) => void;
  completeTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  removeAllTodos: (todo: Todo) => void;
  getTodo: (id: string) => Todo | undefined;
  completeSubtask: (todoId: any, subtaskId: any) => void;
  duplicateTodo: (item: any) => void;
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

  const [todos, setTodos] = useState<Todo[]>(() => getStoredTasks());


  const addTodo = (item: any) => {
    const newTodo = {
      id: uid(),
      isCompleted: false,
      ...item
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id: any, item: any) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, ...item } : todo
    )
    setTodos(newTodos);
  }

  const duplicateTodo = (item: any) => {
    const duplicatedTodo = {
      ...item,
      id: uid(),
      isCompleted: false,
      subtasks: item.subtasks.map((subtask: Subtask) => ({...subtask, id:uid(), isCompleted: false,})),
    }
    setTodos([...todos,duplicatedTodo]);
    console.log([...todos,duplicatedTodo])
  }

  const completeTodo = (item: any) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        const isTodoCompleted = !todo.isCompleted;

        const updatedSubtasks = todo.subtasks.map((subtask) => ({ ...subtask, isCompleted: isTodoCompleted ? true : false, }));
        return { ...todo, isCompleted: isTodoCompleted, subtasks: updatedSubtasks, };
      }
      return todo;
    }
    )
    setTodos(newTodos);
  };

  const removeTodo = (todo: Todo) => {
    setTodos((todos) => todos.filter((el) => el.id !== todo.id));
  };

  const removeAllTodos = () => {
    setTodos([]);
  }

  const completeSubtask = (todoId: any, subtaskId: any) => {
    const newTodos = [...todos].map((todo) => {
      if (todoId === todo.id) {
        todo.subtasks.map((subtask) => {
          if (subtaskId === subtask.id) {
            subtask.isCompleted = !subtask.isCompleted;
          }
          return subtask;
        });
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const getTodo = (id: string) => {
    return todos.find((el) => el.id === id);
  };

  const updateStorage = (tasks: any) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  useEffect(() => {
    updateStorage(todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, completeTodo, removeTodo, removeAllTodos, getTodo, updateStorage, completeSubtask, duplicateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;