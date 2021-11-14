import { Controller, useFormContext } from "react-hook-form";
import { OperationCanceledException } from "typescript";
import McInput from "./Input";
import { Autocomplete } from "@mui/material";

function McAutocomplete({ options, label, name }) {
  // const classes = useStyles();

  const { control } = useFormContext();

  return (
    <Controller
      render={({ onChange, ...field }) => (
        <Autocomplete
          multiple
          style={{ width: 300 }}
          options={options}
          // classes={{
          //   option: classes.option
          // }}
          {...field}
          onChange={(e, data) => {
            onChange(data);
        }}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <McInput
              {...params}
              label={label}
              variant="outlined"
              fullWidth
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      )}
    //   onChange={([event, data]) => {
    //     return data;
    //   }}
      name={name}
      control={control}
    />
  );
}

export default McAutocomplete;
