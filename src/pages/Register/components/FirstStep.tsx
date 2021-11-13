import { Controller, useFormContext } from "react-hook-form";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import McInput from "../../../shared/components/Input";

const FirstStep = () => {
  const { control } = useFormContext();
  return (
    <div>
      <McInput label="First name" name="firstName" />
      <McInput label="Last name" name="lastName" />
      <McInput label="Email" name="email" />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <Controller
          rules={{ required: true }}
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup {...field} row>
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
