import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todosslice from "../slices/todos";
import { Box } from "@material-ui/core";
import { AddToDoField, ToDoItem } from ".";
import { title_unsorted, title_finished } from "../locale.json";

const LeftToDoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((_) => _);

  const addToDo = (text) => {
    dispatch(todosslice.actions.add({ text }));
  };

  return (
    <Box m={2} flexGrow={1}>
      <AddToDoField onClick={addToDo} />
      <Box>
        {title_unsorted}
        {todos
          .filter((toDo) => toDo.active)
          .map((toDo) => (
            <ToDoItem {...toDo} key={toDo.id} />
          ))}
      </Box>
      <Box>
        {title_finished}
        {todos
          .filter((toDo) => !toDo.active)
          .map((toDo) => (
            <ToDoItem {...toDo} key={toDo.id} />
          ))}
      </Box>
    </Box>
  );
};

export default LeftToDoList;
