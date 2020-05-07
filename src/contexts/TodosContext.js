import React, { createContext, useReducer } from "react";

import todosReducer from "../reducers/todosReducer";
import useTodoState from "../hooks/useToDoState";
const defaultTodos = [
  { id: 1, task: "Get myself a gun", completed: false },
  { id: 2, task: "Flowers for the wife", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
