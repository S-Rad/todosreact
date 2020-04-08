import React from "react";
import { Box, Checkbox, Button } from "@material-ui/core";

const ToDoItem = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Checkbox />
        To Do
      </Box>
      <Button variant="contained">Yeet</Button>
    </Box>
  );
};

export default ToDoItem;
