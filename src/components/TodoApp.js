import React from "react";

import useToDoState from "../hooks/useToDoState";

// IMPORT MATERIAL UI STUFF
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

//IMPORT TO DO INFO
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Well, this one wont go away", completed: false }
  ];
  const { todos, addToDo, removeToDo, toggleTodo, editTodo } = useToDoState(
    initialTodos
  );
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
      <AppBar
        color="primary"
        position="static"
        justify="center"
        style={{
          height: "64px",
          textAlign: "center",
          margin: "auto",
          background: "purple"
        }}
        className="gradientColor"
      >
        <Toolbar>
          <Typography
            color="inherit"
            justify="center"
            style={{
              textAlign: "center",
              margin: "auto",
              fontSize: "calc(1rem + 0.25vw)"
            }}
          >
            TO DO LIST w/ HOOKS
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addToDo={addToDo} />
          <TodoList
            toggleTodo={toggleTodo}
            removeToDo={removeToDo}
            todos={todos}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
