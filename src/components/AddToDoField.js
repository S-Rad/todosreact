import React from "react";
import { Box, TextField } from "@material-ui/core";

const AddToDoField = () => {
  return (
    <Box flexDirection="row">
      <TextField id="filled-basic" label="Filled" variant="filled" />
    </Box>
  );
};

export default AddToDoField;
