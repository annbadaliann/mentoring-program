import { Controller, useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import McInput from "../../../shared/components/Input";
import { getGenders, selectGenders } from "../../../store/slicers/common";

import useStyles from "../style";
import { useEffect } from "react";

const FirstStep = () => {
  const genders = useSelector(selectGenders);
  const { control } = useFormContext();
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenders())
  }, [dispatch])

  console.log(genders, 'genders')
  return (
    <div className={classes.wrapper}>
      <McInput label="First name" name="first_name" />
      <McInput label="Last name" name="last_name" />
      <McInput label="Email" name="email" />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <Controller
          rules={{ required: true }}
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup {...field} row>
              {genders.map((item) => (
                <FormControlLabel
                  value={item.value}
                  control={<Radio checked={item.id === +field.value} />}
                  label={item.label}
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormControl>
    </div>
  );
};

export default FirstStep;
