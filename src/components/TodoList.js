import React, { Fragment } from "react";

//IMPORT MATERIAL UI STUFF
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import ToDo from "./Todo";

function TodoList({ todos, removeToDo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <Fragment>
            <ToDo
              id={todo.id}
              removeToDo={removeToDo}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
            />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}
export default TodoList;

// TO DO APP
// -- TODO FORM
// -- TODO LIST
// -- TODO ITEM

// id, task, completed
