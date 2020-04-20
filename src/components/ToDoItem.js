import React, { useState } from "react";
import { Box, Checkbox, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import todosslice from "../todos";

const ToDoItem = ({ id, text, active }) => {
  const dispatch = useDispatch();

  const activeStyle = {
    color: "#000000",
    textDecoration: "none",
  };
  const inactiveStyle = {
    color: "#A9A9A9",
    textDecoration: "line-through",
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box style={active ? activeStyle : inactiveStyle}>
        <Checkbox onClick={() => dispatch(todosslice.actions.toggle({id}))} />
        {text}
      </Box>
      <Button variant="contained">Yeet</Button>
    </Box>
  );
};

export default ToDoItem;
