import React, { Fragment } from "react";

//IMPORT MATERIAL UI STUFF
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function TodoList(props) {
  console.log("props", props);
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <Fragment>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
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
