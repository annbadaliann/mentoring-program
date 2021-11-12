import React from "react";
import Input from "@mui/material/Input";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #9CA3AF",
    borderRadius: "5px",
    padding: "5px 20px !important",
    width: "100%",

  },
  input: {

    "&::placeholder": {
      color: "red",
    },
  },
}));

const HpInput = ({...props}) => {
  const classes = useStyles();

  return (
    <Input
      defaultValue="Hello world"
      margin="dense"
      classes={{ root: classes.root, input: classes.input }}
      disableUnderline
      {...props}
    />
  );
};

export default HpInput;
