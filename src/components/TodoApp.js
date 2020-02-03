import React, { useState, useEffect } from "react";

//import UUID for unique ID
import uuidv4 from "uuid/v4";

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
  const defaultTodos = [
    { id: 1, task: "clean fishtank", completed: false },
    { id: 2, task: "wash car", completed: true },
    { id: 3, task: "grow beard", completed: false }
  ];

  const localdata = window.localStorage.getItem("todos");
  const initialTodos = JSON.parse(localdata) || defaultTodos;

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = newToDoText => {
    setTodos([...todos, { id: uuidv4(), task: newToDoText, completed: false }]);
  };
  const removeToDo = toDoId => {
    // filter out removed ToDo
    const updatedTodos = todos.filter(todo => todo.id !== toDoId);
    // call set ToDos
    setTodos(updatedTodos);
  };

  const toggleTodo = toDoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === toDoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const editTodo = (toDoId, newTask) => {
    const editTodos = todos.map(todo =>
      todo.id === toDoId ? { ...todo, task: newTask } : todo
    );
    setTodos(editTodos);
  };
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
export default TodoApp;

// TO DO APP
// -- TODO FORM
// -- TODO LIST
// -- TODO ITEM

// id, task, completed
