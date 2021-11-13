import * as React from "react";
import { useFormContext } from "react-hook-form";

import TextField from "@mui/material/TextField";

const McInput = ({ ...props }) => {
  //   const { meta } = useController(props);
  const { control, formState } = useFormContext();

  const { register } = control;
  console.log(formState, "form state");
  // const error = get(formState.errors, props.name);
  // const errorText = meta.invalid ? error.message : "";

  return (
    <React.Fragment>
      <TextField
        fullWidth
        {...register(props.name)}
        margin="dense"
        {...props}
      />
    </React.Fragment>
  );
};

export default McInput;