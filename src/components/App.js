import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { LeftToDoList } from ".";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  //inline machen
  listwrapper: {
    margin: 5,
    flexGrow: 1,
  },

  matrixwrapper: {
    margin: 5,
    flexGrow: 2,
  },
}));

const App = () => {
  //styles nach oben ziehen
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.listwrapper}>
        <Box>Unsorted To Dos</Box>
        <Box>Finished To Dos</Box>
      </Box>
      <Box className={classes.matrixwrapper}>Eisenhower To Dos</Box>
    </Box>
  );
};

export default App;
