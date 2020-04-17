import React, { useState } from "react";
import { Box, Checkbox, Button } from "@material-ui/core";

const ToDoItem = () => {
  const [active, setActive] = useState("true");
  const activeStyle = {
    color: "#000000",
    textDecoration: "none",
  };
  const inactiveStyle = {
    color: "#A9A9A9",
    textDecoration: "line-through",
  };

  const handleChecked = () => {
    setActive(!active);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Checkbox onClick={handleChecked} />
        To Do
      </Box>
      <Button variant="contained">Yeet</Button>
    </Box>
  );
};

export default ToDoItem;
