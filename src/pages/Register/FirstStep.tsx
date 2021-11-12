import { TextFieldCustom } from "./Input";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Controller, useFormContext } from "react-hook-form";

const FirstStep = () => {
  const { control } = useFormContext();
  return (
    <div>
      <TextFieldCustom label="First name" name="firstName" />
      <TextFieldCustom label="Last name" name="lastName" />
      <TextFieldCustom label="Email" name="email" />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <Controller
          rules={{ required: true }}
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          )}
        />
      </FormControl>
    </div>
  );
};

export default FirstStep;
