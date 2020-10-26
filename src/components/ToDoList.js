import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todosslice from "../slices/todos";
import { Box } from "@material-ui/core";
import { AddToDoField, ToDoItem } from ".";

const ToDoList = (todos) => {
  return(todos.todos.map((toDo) => <ToDoItem {...toDo} key={toDo.id} />));
};

export default ToDoList;
