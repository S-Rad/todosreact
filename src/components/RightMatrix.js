import React from "react";
import { Box, makeStyles } from "@material-ui/core";

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
      <Box className={classes.matrixfield}>Important, Urgent</Box>
      <Box className={classes.matrixfield}>Important, Not Urgent</Box>
      <Box className={classes.matrixfield}>Not Important, Urgent</Box>
      <Box className={classes.matrixfield}>Not Important, Not Urgent</Box>
    </Box>
  );
};

export default RightMatrix;
