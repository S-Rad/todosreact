import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

const AddToDoField = () => {
  return (
    <Box flexDirection="row">
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <Button variant="contained">Add</Button>
    </Box>
  );
};

export default AddToDoField;
