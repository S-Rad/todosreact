import React from "react";
import { Box } from "@material-ui/core";
import { AddToDoField, ToDoItem } from ".";

const LeftToDoList = () => {
  const activeToDos = [<ToDoItem toDoText="bebsi" key={-1} />];
  const inactiveToDos = [];
  let toDoId = 0;

  const addToDo = (text) => {
    activeToDos.push(<ToDoItem toDoText={text} key={toDoId++} />);
    console.log(text + " " + toDoId);
    console.log(activeToDos);
  };

  return (
    <Box m={2} flexGrow={1}>
      <AddToDoField onClick={addToDo} />
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
