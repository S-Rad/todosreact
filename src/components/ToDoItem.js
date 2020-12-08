import React from "react";
import { Box, Checkbox, Button, NativeSelect } from "@material-ui/core";
import { useDispatch } from "react-redux";
import todosslice from "../slices/todos";
import {
  category_null,
  category_a1,
  category_a2,
  category_b1,
  category_b2,
} from "../locale.json";


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
        <NativeSelect
          onChange={(e) =>
            dispatch(
              todosslice.actions.categorize({
                id,
                category: e.currentTarget.value,
              })
            )
          }
          value={category}
        >
          <option value={null}>{category_null}</option>
          <option value="a1">{category_a1}</option>
          <option value="a2">{category_a2}</option>
          <option value="b1">{category_b1}</option>
          <option value="b2">{category_b2}</option>
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
