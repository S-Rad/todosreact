import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
  category_a1,
  category_a2,
  category_b1,
  category_b2,
} from "../locale.json";
import { useSelector } from "react-redux";
import { ToDoList } from ".";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  matrixfield: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
}));

const RightMatrix = () => {
  const classes = useStyles();
  const { todos } = useSelector((_) => _);
  return (
    <Box m={2} flexGrow={2} className={classes.wrapper}>
      <Box className={classes.matrixfield}>
        {category_a1}
        <ToDoList
          todos={todos.filter((toDo) => toDo.active && toDo.category === "a1")}
        />
      </Box>
      <Box className={classes.matrixfield}>
        {category_a2}
        <ToDoList
          todos={todos.filter((toDo) => toDo.active && toDo.category === "a2")}
        />
      </Box>
      <Box className={classes.matrixfield}>
        {category_b1}
        <ToDoList
          todos={todos.filter((toDo) => toDo.active && toDo.category === "b1")}
        />
      </Box>
      <Box className={classes.matrixfield}>
        {category_b2}
        <ToDoList
          todos={todos.filter((toDo) => toDo.active && toDo.category === "b2")}
        />
      </Box>
    </Box>
  );
};

export default RightMatrix;
