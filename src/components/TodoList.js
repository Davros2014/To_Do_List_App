import React, { useContext, Fragment } from "react";
import { TodosContext } from "../contexts/TodosContext";

//IMPORT MATERIAL UI STUFF
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ToDo from "./Todo";
import "../components/ToDo.css";

function TodoList() {
  const { todos } = useContext(TodosContext);

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
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
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
