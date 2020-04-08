import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

const AddToDoField = () => {
  return (
    <Box display="flex" flexDirection="row">
      <TextField id="filled-basic" label="Filled" variant="filled" fullWidth />
      <Button variant="contained">+</Button>
    </Box>
  );
};

export default AddToDoField;
