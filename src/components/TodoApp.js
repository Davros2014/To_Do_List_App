import React, { useState } from "react";

// IMPORT MATERIAL UI STUFF
// eslint-disable-next-line
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// eslint-disable-next-line
import Grid from "@material-ui/core/Grid";

//IMPORT TO DO INFO
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "clean fishtank", completed: false },
    { id: 2, task: "wash car", completed: true },
    { id: 3, task: "grow beard", completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm />
      <TodoList todos={todos} />
    </Paper>
  );
}
export default TodoApp;

// TO DO APP
// -- TODO FORM
// -- TODO LIST
// -- TODO ITEM

// id, task, completed
