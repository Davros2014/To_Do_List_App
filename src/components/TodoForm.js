import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../contexts/TodosContext";

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  console.log("to do form render!!!");
  return (
    <Paper style={{ margin: "1rem 0 ", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
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
