import { createContext, useContext, useMemo, useState } from "react";
import { TodoItem } from "../types/todo";

export const TodosContext = createContext({} as TodosContextType);

export const TodosContextProvider = ({ children }: any) => {
  const savedTodos = JSON.parse(localStorage.getItem("todos") as string) || [];
  const [todos, setTodos] = useState<TodoItem[]>(savedTodos);

  const addTodo = (title: string, content: string) => {
    const newTodoItem = {
      id: `a-${new Date().getTime().toString()}`,
      title: title || "",
      completed: false,
      content: content || "",
    };
    setTodos([...todos, newTodoItem]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodoItem]));
  };

  const editTodo = (id: string, title: string, content: string) => {
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          title,
          content,
        };
      }
      return todoItem;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todoItem) => todoItem.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      }
      return todoItem;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const memoizedValue = useMemo(
    () => ({
      todos,
      addTodo,
      editTodo,
      removeTodo,
      toggleComplete,
    }),
    [todos]
  );

  return (
    <TodosContext.Provider value={memoizedValue}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useTodosContext context must be use inside TodosProvider");
  }

  return context;
};

export type TodosContextType = {
  todos: TodoItem[];
  addTodo: (title: string, content: string) => void;
  editTodo: (id: string, title: string, content: string) => void;
  removeTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
};