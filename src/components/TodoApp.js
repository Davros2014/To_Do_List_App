import React from "react";

// import useToDoState from "../hooks/useToDoState";
import { TodosProvider } from "../contexts/TodosContext";

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
        <Toolbar
          style={{
            textAlign: "center",
            dsiplay: "flex",
            flexDirection: "column"
          }}
        >
          <Typography
            color="inherit"
            justify="center"
            style={{
              textAlign: "center",
              margin: "auto",
              marginBottom: "0",
              fontSize: "calc(1rem + 0.25vw)"
            }}
          >
            THINGS TO DO LIST
          </Typography>
          <Typography
            color="inherit"
            justify="center"
            style={{
              textAlign: "center",
              margin: "auto",
              fontSize: "calc(0.75rem + 0.25vw)",
              marginTop: "0"
            }}
          >
            Made with React, using hooks, context & local storage
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
