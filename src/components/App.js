import React from "react";
import { Box, makeStyles, CssBaseline } from "@material-ui/core";
import { LeftToDoList, RightMatrix } from ".";
//init
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
}));

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />

      <LeftToDoList />
      <RightMatrix />
    </Box>
  );
};

export default App;
