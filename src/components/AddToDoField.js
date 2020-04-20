import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

const AddToDoField = (props) => {
  return (
    <Box display="flex" flexDirection="row">
      <TextField id="filled-basic" label="Filled" variant="filled" fullWidth />
      <Button variant="contained" onClick={() => props.onClick("meow")}>
        +
      </Button>
    </Box>
  );
};

export default AddToDoField;
