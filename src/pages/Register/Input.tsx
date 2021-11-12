import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  useFormContext,
  
} from "react-hook-form";
export const TextFieldCustom = ({ ...props }) => {
  //   const { meta } = useController(props);
  const { control, formState } = useFormContext();

  const { register} = control;
  console.log(control, props);
  //   const error = get(formState.errors, props.name);
  //   const errorText = meta.invalid ? error.message : "";

  return (
    <TextField
      required
      fullWidth
      {...register(props.name)}
      margin="dense"
      {...props}
    />
  );
};
