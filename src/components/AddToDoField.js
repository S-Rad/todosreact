import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";

const AddToDoField = (props) => {
  const [toDoText, setToDoText] = useState("");

  return (
    <Box display="flex" flexDirection="row">
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        onChange={(event) => setToDoText(event.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={() => props.onClick(toDoText)}>
        +
      </Button>
    </Box>
  );
};
export default AddToDoField;
