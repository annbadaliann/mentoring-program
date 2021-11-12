import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Spinner = ({ size }: any) => {
  const classes = useStyles();
  return <CircularProgress color="secondary" size={size} />;
};

export default Spinner;
