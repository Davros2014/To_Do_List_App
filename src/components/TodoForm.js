import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import useInputState from "../hooks/useInputState";

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper>
      {value}
      <TextField value={value} onChange={handleChange} />
      <button onClick={reset}>Reset</button>
    </Paper>
  );
}
export default TodoForm;
