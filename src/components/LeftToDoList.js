import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todosslice from "../slices/todos";
import { Box } from "@material-ui/core";
import { AddToDoField, ToDoItem, ToDoList } from ".";
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

      {title_unsorted}
      {
        <ToDoList
          todos={todos.filter((toDo) => toDo.active && toDo.category === null)}
        />
      }

      {title_finished}
      {<ToDoList todos={todos.filter((toDo) => !toDo.active)} />}
    </Box>
  );
};

export default LeftToDoList;
