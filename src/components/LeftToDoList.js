import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todosslice from "../todos";
import { Box } from "@material-ui/core";
import { AddToDoField, ToDoItem } from ".";

const LeftToDoList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.todos);

  const addToDo = (text) => {
    dispatch(todosslice.actions.add({text}));
  };

  return (
    <Box m={2} flexGrow={1}>
      <AddToDoField onClick={addToDo} />
      <Box>
        Unsorted To Dos
        {toDos
          .filter((toDo) => toDo.active)
          .map((toDo) => (
            <ToDoItem {...toDo} key={toDo.id} />
          ))}
      </Box>
      <Box>
        Finished To Dos
        {toDos
          .filter((toDo) => !toDo.active)
          .map((toDo) => (
            <ToDoItem {...toDo} key={toDo.id} />
          ))}
      </Box>
    </Box>
  );
};

export default LeftToDoList;
