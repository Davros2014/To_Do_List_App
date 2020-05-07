import React, { useContext, Fragment } from "react";

// hooks/contexts
import useToggleState from "../hooks/useToggleState";
import { TodosContext } from "../contexts/TodosContext";

//components
import EditTodoForm from "./EditTodoForm";

//material ui imports
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function ToDo({ id, task, completed }) {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px" }} className="listStyles">
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <Fragment>
          <Checkbox
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
            tabIndex={-1}
            checked={completed}
            style={{ color: "#3b8d99" }}
          />
          <ListItemText
            style={{
              textDecoration: completed ? "line-through" : "none",
              opacity: completed ? "0.4" : "1"
            }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => dispatch({ type: "REMOVE", id: id })}
              aria-label="Delete"
            >
              <DeleteIcon></DeleteIcon>
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon></EditIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </Fragment>
      )}
    </ListItem>
  );
}
export default ToDo;
