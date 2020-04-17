import React from "react";
import { Box } from "@material-ui/core";
import { AddToDoField, ToDoItem } from ".";

const LeftToDoList = () => {
  const activeToDos = [<ToDoItem toDoText="bebsi" />];
  const inactiveToDos = [];

  const addToDo = (text) => {
    return <ToDoItem toDoText={text} />;
  };
  return (
    <Box m={2} flexGrow={1}>
      <AddToDoField />
      <Box>
        Unsorted To Dos
        {activeToDos}
      </Box>
      <Box>
        Finished To Dos
        {inactiveToDos}
      </Box>
    </Box>
  );
};

export default LeftToDoList;
