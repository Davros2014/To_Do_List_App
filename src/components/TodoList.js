import React, { Fragment } from "react";

//IMPORT MATERIAL UI STUFF
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ToDo from "./Todo";
import "../components/ToDo.css";

function TodoList({ todos, removeToDo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List
          style={{
            paddingBottom: "0"
          }}
          className="listStyles"
        >
          {todos.map((todo, i) => (
            <Fragment key={i}>
              <ToDo
                id={todo.id}
                removeToDo={removeToDo}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;

// function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
//   if (todos.length)
//     return (
//       <Paper>
//         <List>
//           {todos.map((todo, i) => (
//             // To add a key to a fragment, we have to use the long-hand version
//             // rather than <> </>, we have to use <React.Fragment>
//             <React.Fragment key={i}>
//               <ToDo
//                 {...todo}
//                 key={todo.id}
//                 removeTodo={removeTodo}
//                 toggleTodo={toggleTodo}
//                 editTodo={editTodo}
//               />
//               {i < todos.length - 1 && <Divider />}
//             </React.Fragment>
//           ))}
//         </List>
//       </Paper>
//     );
//   return null;
// }
// export default TodoList;
