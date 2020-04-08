import React from "react";
import { Box } from "@material-ui/core";
import { AddToDoField } from ".";

const LeftToDoList = () => {
  return (
    <Box m={2} flexGrow={1}>
      <AddToDoField />
      <Box>Unsorted To Dos</Box>
      <Box>Finished To Dos</Box>
    </Box>
  );
};

export default LeftToDoList;
