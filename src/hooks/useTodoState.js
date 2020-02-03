// import { useState } from "react";
// import uuid from "uuid/v4";
// export default initialTodos => {
//   const [todos, setTodos] = useState(initialTodos);
//   return {
//     todos,
//     addTodo: newTodoText => {
//       setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
//     },
//     removeTodo: todoId => {
//       //filter out removed todo
//       const updatedTodos = todos.filter(todo => todo.id !== todoId);
//       //call setTodos with new todos array
//       setTodos(updatedTodos);
//     },
//     toggleTodo: todoId => {
//       const updatedTodos = todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       );
//       setTodos(updatedTodos);
//     },
//     editTodo: (todoId, newTask) => {
//       const updatedTodos = todos.map(todo =>
//         todo.id === todoId ? { ...todo, task: newTask } : todo
//       );
//       setTodos(updatedTodos);
//     }
//   };
// };
//

import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addToDo: newToDoText => {
      setTodos([...todos, { id: uuid(), task: newToDoText, completed: false }]);
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
