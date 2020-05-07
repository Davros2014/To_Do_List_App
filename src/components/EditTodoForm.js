import React, { useContext } from "react";

// hooks/contexts
import { TodosContext } from "../contexts/TodosContext";
import useInputState from "../hooks/useInputState";

//import Material UI
import TextField from "@material-ui/core/TextField";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { dispatch } = useContext(TodosContext);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ margin: "0 1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
