import { FC, useState, useCallback } from "react";
import ToDoItem from "./ToDoItem";
import { ToDo } from "../App"; // Import the ToDo interface

const ToDoList: FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a ToDo App", completed: false },
    { id: 3, text: "Master Event Delegation", completed: false },
  ]);

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const todoId = parseInt(e.target.dataset.id!, 10);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: e.target.checked } : todo
        )
      );
    },
    []
  );

  const handleDelteButtonClick = useCallback((todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }, []);

  return (
    <div onChange={handleCheckboxChange}>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onDelete={handleDelteButtonClick}
        />
      ))}
    </div>
  );
};

export default ToDoList;
