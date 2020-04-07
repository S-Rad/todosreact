import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
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
    <Box className={classes.root} display="flex" m={1}>
      <Box mr={2} flexGrow={1}>
        <Box>Unsorted To Dos aaaaaaaaaaaaa</Box>
        <Box>Finished To Dos</Box>
      </Box>
      <Box flexGrow={2}>Eisenhower To Dos</Box>
    </Box>
  );
};

export default App;
