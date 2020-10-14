import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todosslice from "../slices/todos";
import { Box } from "@material-ui/core";
import { AddToDoField, ToDoItem } from ".";

const LeftToDoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(_ => _);

  const addToDo = (text) => {
    dispatch(todosslice.actions.add({ text }));
  };

  return (
    <Box m={2} flexGrow={1}>
      <AddToDoField onClick={addToDo} />
      <Box>
        Unsorted To Dos
        {todos
          .filter((toDo) => toDo.active)
          .map((toDo) => (
            <ToDoItem {...toDo} key={toDo.id} />
          ))}
      </Box>
      <Box>
        Finished To Dos
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
