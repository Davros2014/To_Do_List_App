import React, { createContext } from "react";
import useLocalStorageReducer from "../reducers/useLocalStorageReducer";

import todosReducer from "../reducers/todosReducer";
// import useTodoState from "../hooks/useToDoState";
const defaultTodos = [
  {
    id: 1,
    task: "Find a job as a developer",
    completed: false
  },
  { id: 2, task: "Socially isolate from the corona virus...", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todosReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
