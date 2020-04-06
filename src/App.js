import React from "react";
import { Box } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Box display="flex" m={1}>
      <Box mr={2}>
        <Box>Unsorted To Dos aaaaaaaaaaaaa</Box>
        <Box>Finished To Dos</Box>
      </Box>
      <Box>Eisenhower To Dos</Box>
    </Box>
  );
}

export default App;
