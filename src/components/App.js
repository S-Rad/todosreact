import React from "react";
import { Box, makeStyles, CssBaseline } from "@material-ui/core";
import { LeftToDoList, RightMatrix } from ".";

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
  //styles nach oben ziehen
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
