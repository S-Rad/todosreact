import React from "react";
import { Box, Checkbox, Button, NativeSelect } from "@material-ui/core";
import { useDispatch } from "react-redux";
import todosslice from "../slices/todos";

const ToDoItem = ({ id, text, active, category }) => {
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
        <Checkbox
          onClick={() => dispatch(todosslice.actions.toggle({ id }))}
          checked={!active}
        />
        {text}
      </Box>
      <Box>
        {" "} 
        {/*auf value zugreifen und an store uebergeben*/}
        <NativeSelect onChange={() => dispatch(todosslice.actions.categorize({ id } ))}>
          <option value={null}>Unsorted</option>
          <option value="a1">Important, Urgent</option>
          <option value="a2">Important, Not Urgent</option>
          <option value="b1">Not Important, Urgent</option>
          <option value="b2">
            Not Important, Not Urgent
          </option>
        </NativeSelect>
        <Button
          variant="contained"
          onClick={() => dispatch(todosslice.actions.remove({ id }))}
        >
          Yeet
        </Button>
      </Box>
    </Box>
  );
};

export default ToDoItem;
