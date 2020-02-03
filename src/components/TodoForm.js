import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import useInputState from "../hooks/useInputState";

function TodoForm({ addToDo }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0 ", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addToDo(value);
          reset();
        }}
        className="listStyles"
      >
        <TextField
          value={value}
          onChange={handleChange}
          required={true}
          margin="normal"
          label="Add new list item here & press enter"
          style={{ width: "100%" }}
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
