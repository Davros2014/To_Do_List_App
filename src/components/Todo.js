import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
// eslint-disable-next-line
import IconButton from "@material-ui/core/IconButton";
// eslint-disable-next-line
import DeleteIcon from "@material-ui/icons/Delete";
// eslint-disable-next-line
import EditIcon from "@material-ui/icons/Edit";
// eslint-disable-next-line
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed, removeToDo, id }) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => removeToDo(id)} aria-label="Delete">
          <DeleteIcon></DeleteIcon>
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon></EditIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default Todo;
