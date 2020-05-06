import useLocalStorageState from "./useLocalStorageState";

// import uuid from "uuid/v4";
import { v4 as uuidv4 } from "uuid";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addToDo: newToDoText => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newToDoText, completed: false }
      ]);
    },
    removeToDo: toDoId => {
      const updatedTodos = todos.filter(todo => todo.id !== toDoId);
      setTodos(updatedTodos);
    },
    toggleTodo: toDoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === toDoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (toDoId, newTask) => {
      const editTodos = todos.map(todo =>
        todo.id === toDoId ? { ...todo, task: newTask } : todo
      );
      setTodos(editTodos);
    }
  };
};
