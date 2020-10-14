import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
  category_a1,
  category_a2,
  category_b1,
  category_b2,
} from "../locale.json";

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
  return (
    <Box m={2} flexGrow={2} className={classes.wrapper}>
      <Box className={classes.matrixfield}>{category_a1}</Box>
      <Box className={classes.matrixfield}>{category_a2}</Box>
      <Box className={classes.matrixfield}>{category_b1}</Box>
      <Box className={classes.matrixfield}>{category_b2}</Box>
    </Box>
  );
};

export default RightMatrix;
